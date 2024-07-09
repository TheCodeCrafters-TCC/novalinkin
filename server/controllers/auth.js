import UserModel from "../models/User.js";
import comparePassword from "../utils/comparePassword.js";
import genAuthToken from "../utils/genAuthToken.js";
import hashPassword from "../utils/hashedPassword.js";
import { slugify } from "../utils/slugify.js";
import { generateCode } from "../utils/generateCode.js";
import welcomeUser from "../utils/emails/welcome.js";
import sendEmail from "../utils/emails/sendEmail.js";
import Cloud from "../utils/cloudinary.js";
import crypto from "crypto";
import resetLink from "../utils/emails/resetLink.js";

export const signUpController = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, image } = req.body;
    const uploadRes = await Cloud.uploader.upload(image, {
      upload_preset: "NovaLinkin_Users_Profile",
    });

    const isEmailExist = await UserModel.findOne({ email });

    if (isEmailExist) {
      return res.status(403).json("User already exits");
    }

    const hashedPassword = await hashPassword(password);

    const code = generateCode(6);

    await welcomeUser({
      emailTo: email,
      subject: `Welcome onboard ${firstName}!`,
      name: firstName,
    });
    const slugText = firstName + " " + lastName;
    const User = new UserModel({
      firstName,
      lastName,
      email,
      userProfile: uploadRes.url,
      password: hashedPassword,
      slugName: slugify(slugText),
      verificationCode: code,
    });

    const user = await User.save();

    await sendEmail({
      emailTo: user.email,
      subject: "Verify Your NovaLinkin Account",
      code,
      content: "Verify Your NovaLinkin Account!",
    });

    const token = genAuthToken(user);

    res.status(201).json(token);
  } catch (error) {
    console.log(error);
    // console.log({ error: error.message });
  }
};

export const signInController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) return res.status(400).json("User not found");

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) return res.status(403).json("Incorrect password");

    const token = genAuthToken(user);

    res.status(200).json(token);
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const verifyEmail = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      res.code = 400;
      throw new Error("User not found");
    }

    if (user.hasVerified_email) {
      res.code = 400;
      throw new Error("User already verified");
    }

    const code = generateCode(6);

    user.verificationCode = code;

    await user.save();

    await sendEmail({
      emailTo: user.email,
      subject: "Verify Your NovaLinkin Account",
      code,
      content: "Verify Your NovaLinkin Account!",
    });

    res.status(200).json(code);
  } catch (error) {
    next(error);
  }
};

export const findCodeAndVerifyEmail = async (req, res) => {
  try {
    const { email, code } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) return res.status(404).json("User not found");

    if (user.verificationCode === code) {
      user.hasVerified_email = true;
      return res.status(200).json("Email verified");
    } else {
      return res.status(403).json("Invalidcode");
    }
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const forgottenPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json("User not found");
    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    await user.save();
    const resetUrl = `http://localhost:3000/auth/reset-password/${resetToken}`;
    await resetLink({
      emailTo: email,
      resetUrl: resetUrl,
    });
    res.status(200).json("Token sent");
  } catch (error) {
    console.log({ error: error.message });
  }
};
