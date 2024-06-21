import UserModel from "../models/User.js";
import hashPassword from "../utils/hashedPassword.js";

export const signUpController = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // const isEmailExist = await UserModel.findOne({email});

        // if (isEmailExist) {
        //     res.code = 400;
        //     throw new Error("Email already exists")
        // }

        const hashedPassword = await hashPassword(password);

        const user = new UserModel({firstName, lastName, email, password: hashedPassword});

        await user.save();  

        res.status(201).json({code: 201, status: true, message: 'User Created Successfully'})
    } catch (error) {
        console.log(error.message)
    }
}