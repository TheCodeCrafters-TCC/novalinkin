import UserModel from "../models/User.js";
import hashPassword from "../utils/hashedPassword.js";
import comparePassword from "../utils/comparePassword.js";

export const signUpController = async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const isEmailExist = await UserModel.findOne({email});

        if (isEmailExist) {
            res.code = 400;
            throw new Error("Email already exists")
        }

        const hashedPassword = await hashPassword(password);

        const user = new UserModel({firstName, lastName, email, password: hashedPassword});

        await user.save();  

        res.status(201).json({code: 201, status: true, message: 'User Created Successfully'})
    } catch (error) {
        next(error)
    }
}

export const signInController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({email});

        if (!user) {
            res.code = 401;
            throw new Error("Invalid Credentials")
        }
        
        const match = await comparePassword(password, user.password)

        if (!match) {
            res.code = 401;
            throw new Error("Invalid Credentials")
        }

        res.status(201).json({
            code: 201, 
            status: true,
             message: 'User Created Successfully'})
    } catch (error) {
        next(error)
    }
}