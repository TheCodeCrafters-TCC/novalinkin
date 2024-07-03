import UserModel from "../models/User.js";

const allUsersController = async (req, res, next) => {
    try {
        const users = await UserModel.find().sort({createdAt: -1}).select("-password -notifications -verificationCode -chats");


        res.status(200).send({
            code: 200,
            status: true,
            data: users,
            message: "User Data Retrieved Successfully!"
        });

    } catch (error) {
        next(error);
    };
};

export default allUsersController;