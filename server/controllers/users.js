import UserModel from "../models/User.js";
import connectModel from "../models/request.js";

const allUsersController = async (req, res, next) => {
    try {
        const users = await UserModel.find().sort({createdAt: -1}).select("-password -notifications -verificationCode -chats");


        res.status(200).json({
            code: 200,
            status: true,
            data: users,
            message: "User Data Retrieved Successfully!"
        });

    } catch (error) {
        next(error);
    };
};

const findBySlug = async (req, res, next) => {
    try {
        const slug = req.params.slugName;

        const user = await UserModel.findOne({slugName: slug}).sort({createdAt: -1}).select("-password -notifications -verificationCode -chats");

        res.status(200).json({
            code: 201,
            status: true,
            data: user,
            message: "User Data Retrieved Successfully"
        })
    } catch (error) {
        next(error);
    };
};

const findById = async (req, res, next) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findById(id).sort({createdAt: -1}).select("-notifications -password -verificationCode");

        res.status(200).json({
            code: 200,
            status: true,
            data: user,
            message: "User Data Retrieved Successfully"
        });
    } catch (error) {
        next(error);
    };
};

const connectionRequest = async (req, res, next) => {
    try {
        const { connectionRequest, requestId } = req.body;

        const sender = await UserModel.findById(connectionRequest);

        const reciever = await UserModel.findById(requestId);

        const sendRequest = new connectModel({
            connectionRequest: sender._id,
            requestId: reciever._id
        });

        sendRequest.save();

        await sender.updateOne({$set: {requests: sendRequest}});

        await reciever.updateOne({$set: {requests: sendRequest}});

        res.status(200).json({
            code: 200,
            status: true,
            message: "Connection Request Sent Successfully",
        });
    } catch (error) {
        next(error);
    };
};

const deleteAccount = async (req, res, next) => {
    try {
        const id = req.params.id;

        await UserModel.findOneAndDelete({_id: id});

        res.status(200).json({
            code: 200,
            status: true,
            message: "User Deleted Successfully!"
        });
    } catch (error) {
        next(error);
    };
};

export { allUsersController, findBySlug, findById, connectionRequest, deleteAccount };