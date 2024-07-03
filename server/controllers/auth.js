import UserModel from "../models/User.js";
import comparePassword from "../utils/comparePassword.js";
import genAuthToken from "../utils/genAuthToken.js";
import hashPassword from "../utils/hashedPassword.js";
import { slugify } from "../utils/slugify.js";
import { generateCode } from "../utils/generateCode.js";
import sendEmail from "../utils/sendEmail.js";

export const signUpController = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const isEmailExist = await UserModel.findOne({ email });

    if (isEmailExist) {
      return res.status(403).json("User already exits");
    }

    const hashedPassword = await hashPassword(password);

    const User = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      slugName: slugify(firstName, lastName),
    });

    const user = await User.save();

    const token = genAuthToken(user);

    res.status(201).json(token);
  } catch (error) {
    next(error);
  };
};

export const signInController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) return res.status(400).json("User not found");

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) return res.status(403).json("Incorrect password");

    const token = genAuthToken(user);

    res.status(200).json(token);
  } catch (error) {
    next(error);
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

    if (user.isVerified) {
      res.code = 400;
      throw new Error("User already verified");
    }

    const code = generateCode(6);

    user.verificationCode = code;

    await user.save();

    await sendEmail({
      emailTo: user.email,
      subject: "Verify Your Connnectify Account",
      code,
      content: "Verify Your Connectify Account!",
    });

    res.status(200).json({
      code: 200,
      status: true,
      message: "Code Sent Successfully",
    });
  } catch (error) {
    next(error);
  };
};
