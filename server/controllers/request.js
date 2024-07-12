import NotificationModel from "../models/Notification.js";
import connectModel from "../models/request.js";
import UserModel from "../models/User.js";

export const findUserRequest = async (req, res) => {
  try {
    const { rId, cId } = req.params;
    const request = await connectModel.findOne({
      $or: [
        { requestId: rId, connectionRequest: cId },
        { requestId: cId, connectionRequest: rId },
      ],
    });
    res.status(200).json(request);
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const acceptRequest = async (req, res) => {
  try {
    const { userId, connectId } = req.body;
    const request = await connectModel.findById(connectId);
    const sender = await UserModel.findById(request.connectionRequest);
    const receiver = await UserModel.findById(userId);
    if (!request) return res.status(404).json("Request not found");
    if (request.requestId !== userId) {
      return res.status(403).json("Unauthorize action");
    } else {
      const notifyAction = new NotificationModel({
        Image: receiver.userProfile,
        header: `${
          receiver.firstName + " " + receiver.lastName
        } accepted! your request`,
        body: `${
          receiver.firstName + " " + receiver.lastName
        } accepted your request! Say hello and start building your professional network.`,
        slugName: receiver.slugName,
        ownerId: sender._id,
        reactId: userId,
        notifyType: "connected",
      });
      request.status = "Accepted";
      request.save();
      // await request.deleteOne();
      const newNotification = await notifyAction.save();
      await sender.updateOne({ $push: { notifications: newNotification } });
      await receiver.updateOne({ $push: { connections: sender._id } });
      await sender.updateOne({ $push: { connections: receiver._id } });
      res.status(200).json({ data: request, message: "Request accepted" });
    }
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const declineRequest = async (req, res) => {
  try {
    const { userId, connectId } = req.body;
    const request = await connectModel.findById(connectId);
    const sender = await UserModel.findById(request.connectionRequest);
    const receiver = await UserModel.findById(userId);
    if (!request) return res.status(404).json("Request not found");
    if (request.requestId !== userId) {
      return res.status(403).json("Unauthorize action");
    } else {
      request.status = "Declined";
      request.save();
      await receiver.updateOne({ $pull: { requests: sender._id } });
      await request.deleteOne();
      res.status(200).json({ data: request, message: "Request declined" });
    }
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const unDoConnection = async (req, res) => {
  try {
    const { connectId, userId } = req.body;
    const request = await connectModel.findById(connectId);
    if (!request) {
      return res.status(404).json("Request not found");
    } else {
      const sender = await UserModel.findById(request.connectionRequest);
      const receiver = await UserModel.findById(request.requestId);
      if (
        userId !== request.connectionRequest &&
        userId !== request.requestId
      ) {
        return res.status(403).json("Unauthorized action");
      } else {
        await sender.updateOne({ $pull: { connections: receiver._id } });
        await receiver.updateOne({ $pull: { connections: sender._id } });
        await request.deleteOne();
        res.status(200).json({ message: "Unpaired" });
      }
    }
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const getAllCommunityReqs = async (req, res) => {
  try {
    const { communityId } = req.params;
    const requests = await connectModel
      .find({ requestId: communityId })
      .sort({ createdAt: -1 });
    const unChecked = requests.filter((r) => r.status === "Pending");
    res.status(200).json(unChecked);
  } catch (error) {
    console.log(error.message);
  }
};
