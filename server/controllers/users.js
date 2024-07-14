import NotificationModel from "../models/Notification.js";
import UserModel from "../models/User.js";
import connectModel from "../models/Request.js";
import Cloud from "../utils/cloudinary.js";
import genAuthToken from "../utils/genAuthToken.js";
import { exc, slugExc, toSel } from "../utils/select.js";

const allUsersController = async (req, res, next) => {
  try {
    const users = await UserModel.find().sort({ createdAt: -1 }).select(exc);
    res.status(200).json({
      code: 200,
      status: true,
      data: users,
      message: "User Data Retrieved Successfully!",
    });
  } catch (error) {
    next(error);
  }
};

const findBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const user = await UserModel.findOne({ slugName: slug })
      .sort({ createdAt: -1 })
      .select(slugExc);

    if (!user) return res.status(400).json("User not found");

    res.status(200).json({
      code: 201,
      status: true,
      data: user,
      message: "User Data Retrieved Successfully",
    });
  } catch (error) {
    next(error);
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findById(id)
      .sort({ createdAt: -1 })
      .select(slugExc);

    res.status(200).json({
      code: 200,
      status: true,
      data: user,
      message: "User Data Retrieved Successfully",
    });
  } catch (error) {
    next(error);
  }
};

const connectionRequest = async (req, res, next) => {
  try {
    const { connectionRequest, requestId } = req.body;

    const sender = await UserModel.findById(connectionRequest);

    const reciever = await UserModel.findById(requestId);

    const sendRequest = new connectModel({
      connectionRequest: sender._id,
      requestId: reciever._id,
    });

    const notifyReceiver = new NotificationModel({
      ownerId: requestId,
      reactId: connectionRequest,
      header: "You have a new connection request",
      Image: sender.userProfile,
      body: `${
        sender.firstName + " " + sender.lastName
      } sent you a connection request`,
      notifyType: "connect",
      slugName: sender.slugName,
    });

    sendRequest.save();
    const notification = await notifyReceiver.save();

    await reciever.updateOne({ $set: { requests: sendRequest } });
    await reciever.updateOne({ $push: { notifications: notification } });

    res.status(200).json({
      code: 200,
      status: true,
      message: "Connection Request Sent Successfully",
    });
  } catch (error) {
    next(error);
  }
};

const deleteAccount = async (req, res, next) => {
  try {
    const { id } = req.params;

    await UserModel.findOneAndDelete({ _id: id });

    res.status(200).json({
      code: 200,
      status: true,
      message: "User Deleted Successfully!",
    });
  } catch (error) {
    next(error);
  }
};

const updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    const { form } = req.body;

    if (!form || typeof form !== "object") {
      return res.status(400).json({ error: "Invalid form data" });
    }

    const user = await UserModel.findByIdAndUpdate(userId, form, {
      new: true,
    }).select(slugExc);
    const token = genAuthToken(user);
    res.status(200).json({ token, user });
  } catch (error) {
    console.log({ error: error.message });
    return res.status(500).json({ error: error.message });
  }
};

const getUserRequests = async (req, res) => {
  try {
    const { userId } = req.params;
    const requests = await connectModel
      .find({ requestId: userId })
      .sort({ createdAt: -1 });
    const response = requests.filter((r) => r.status === "Pending");
    if (!requests || requests?.length < 1)
      return res.status(404).json("You have no request!");
    res.status(200).json(response);
  } catch (error) {
    console.log({ error: error.message });
    return res.status(500).json({ error: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const { image } = req.body;
    if (image) {
      const uploadRes = await Cloud.uploader.upload(image, {
        upload_preset: "NovaLinkin_Users_Profile",
      });
      if (uploadRes) {
        const user = await UserModel.findByIdAndUpdate(
          userId,
          { userProfile: uploadRes.url },
          { new: true }
        );
        const token = genAuthToken(user);
        return res.status(200).json({ user, token });
      } else {
        console.log("Something went wrong with the image");
        return res.status(404).json("Image not found");
      }
    } else {
      console.log("Image required");
      return res.status(403).json("Image required");
    }
  } catch (error) {
    console.log({ error: error.message });
    return res.status(500).json({ error: error.message });
  }
};

export {
  allUsersController,
  findBySlug,
  findById,
  connectionRequest,
  deleteAccount,
  updateProfile,
  getUserRequests,
  updateUserProfile,
};
