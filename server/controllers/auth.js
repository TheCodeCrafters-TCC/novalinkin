import UserModel from "../models/User.js";
import hashPassword from "../utils/hashedPassword.js";
import { slugify } from "../utils/slugify.js";

export const signUpController = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const isEmailExist = await UserModel.findOne({ email });

    if (isEmailExist) {
      return res.status(430).json("User already exits");
    }

    const hashedPassword = await hashPassword(password);

    const user = new UserModel({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      slugName: slugify(firstName, lastName),
    });

    await user.save();

    res
      .status(201)
      .json({ code: 201, status: true, message: "User Created Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
