import CommunityModel from "../models/Community.js";
import NotificationModel from "../models/Notification.js";
import connectModel from "../models/Request.js";
import UserModel from "../models/User.js";
import Cloud from "../utils/cloudinary.js";
import { slugExc } from "../utils/select.js";
import { genHash, slugify } from "../utils/slugify.js";

export const createCommunity = async (req, res) => {
  try {
    const { ownerId } = req.params;
    const {
      communityName,
      communityDesc,
      communityType,
      communityProfile,
      joinOption,
    } = req.body;
    const user = await UserModel.findById(ownerId).sort(slugExc);
    if (!ownerId) return res.status(403).json("creatorId is required");
    // const alreadyExit = CommunityModel.findOne({ communityName });
    // if (alreadyExit) return res.status(403).json("Community already exits");
    const uploadRes = await Cloud.uploader.upload(communityProfile, {
      upload_preset: "NovaLinkin_community",
    });
    let inviteLink = "link";
    const community = new CommunityModel({
      ownerId: ownerId,
      communityName,
      communityDesc,
      communityType,
      communityProfile: uploadRes,
      joinOption,
      communitySlug: slugify(communityName),
      invitationCode: inviteLink,
    });
    inviteLink = `${community?.communitySlug}?code=${genHash()}`;
    const newCommunity = await community.save();
    newCommunity.invitationCode = inviteLink;
    newCommunity.save();
    await user.updateOne({ $push: { community: newCommunity } });

    res.status(201).json(newCommunity);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

export const deleteCommunity = async (req, res) => {
  try {
    const { ownerId, communityId } = req.params;
    const user = await UserModel.findById(ownerId);
    const Community = await CommunityModel.findById(communityId);
    if (!Community) return res.status(404).json("Community not found");
    if (ownerId !== Community.ownerId) {
      return res.status(403).json("Unauthorized action");
    } else {
      await Cloud.uploader.destroy(Community.communityProfile?.public_id);
      await UserModel.findByIdAndUpdate(
        ownerId,
        { $pull: { community: Community } },
        { new: true }
      );
      await Community.deleteOne();

      res.status(200).json({ message: "Community deleted", data: Community });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

export const getAllCommunity = async (req, res) => {
  try {
    const communities = await CommunityModel.find().sort({ createdAt: -1 });
    const allowed = communities.filter((cm) => cm.communityType !== "Private");
    return res.status(200).json(allowed);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

export const getCommunity = async (req, res) => {
  try {
    const { slug } = req.params;
    const community = await CommunityModel.findOne({ communitySlug: slug });
    if (!community) return res.status(404).json("Community not found");
    return res.status(200).json(community);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

export const getUserCommunities = async (req, res) => {
  try {
    const { userId } = req.params;
    const community = await CommunityModel.find();
    const belongTo = community.filter((cm) => cm.members.includes(userId));
    return res.status(200).json(belongTo);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

export const findPrivateCommunity = async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) return res.status(403).json("Invite link required");
    const community = await CommunityModel.findOne({ invitationCode: url });
    if (!community) return res.status(404).json("Invalid invite link");
    return res.status(200).json(community);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

export const getOwnerCommunities = async (req, res) => {
  try {
    const { ownerId } = req.params;
    const communities = await CommunityModel.find({ ownerId }).sort({
      createdAt: -1,
    });
    if (!communities) return res.status(404).json("You don't have any");
    return res.status(200).json(communities);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

export const joinCommunity = async (req, res) => {
  try {
    const { communityId, userId } = req.body;
    const user = await UserModel.findById(userId);
    const community = await CommunityModel.findById(communityId);
    if (!community) return res.status(404).json("Community not found");
    // Check community joining option type /
    // Reject request if option is invite only /
    if (community.joinOption === "Open") {
      if (!community.members.includes(userId)) {
        const updatedCommunity = await CommunityModel.findByIdAndUpdate(
          communityId,
          { $push: { members: userId } },
          { new: true }
        );
        res
          .status(200)
          .json({ message: "You're now a member", data: updatedCommunity });
      } else return res.status(403).json("You're already a memeber");
    } else if (community.joinOption === "Request to join") {
      const creator = await UserModel.findById(community.ownerId);
      const sendRequest = new connectModel({
        connectionRequest: userId,
        requestId: community._id,
      });
      // Notify community owner of new join requests
      const notifyAction = new NotificationModel({
        Image: user.userProfile,
        header: `You have a new request`,
        body: `<strong>${user.firstName} ${user.lastName}</strong> has shown interest in becoming a member of your community.`,
        slugName: community.communitySlug,
        ownerId: creator._id,
        reactId: userId,
        notifyType: "community-request",
      });
      const newNotification = await notifyAction.save();
      const newReq = await sendRequest.save();
      const updatedCommunity = await CommunityModel.findByIdAndUpdate(
        communityId,
        { $push: { joinRequest: newReq } },
        { new: true }
      );
      await creator.updateOne({ $push: { notifications: newNotification } });
      res
        .status(200)
        .json({ message: "You request has been sent", data: updatedCommunity });
    } else {
      return res.status(403).json("Invitation is required");
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

export const leaveCommunity = async (req, res) => {
  try {
    const { communityId, userId } = req.body;
    const community = await CommunityModel.findById(communityId);
    if (!community) return res.status(404).json("Community not found");
    if (community.members.includes(userId)) {
      const updatedCommunity = await CommunityModel.findByIdAndUpdate(
        communityId,
        { $pull: { members: userId } },
        { new: true }
      );

      res.status(200).json(updatedCommunity);
    } else return res.status(409).json("You're not a member");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};

export const acceptCommunityReq = async (req, res) => {
  try {
    const { ownerId, communityId, requestId } = req.body;
    const request = await connectModel.findById(requestId);
    const community = await CommunityModel.findById(communityId);
    const user = await UserModel.findById(request.connectionRequest);
    // Check authorization of data
    if (!request) return res.status(404).json("Request not found");
    if (!user) return res.status(404).json("User not found");
    if (!community) return res.status(404).json("Community not found");
    if (ownerId !== community.ownerId) {
      return res.status(403).json("Unauthorized action");
    } else {
      // Notify community user of community acceptance
      const notifyAction = new NotificationModel({
        Image: community.communityProfile?.url,
        header: `Welcome to the Community!`,
        body: `Congratulations! Your request to join <strong>${community.communityName}</strong> has been accepted. We’re excited to have you with us. Explore, connect, and contribute!`,
        slugName: community.communitySlug,
        ownerId: user._id,
        reactId: ownerId,
        notifyType: "community-request",
      });
      const newNotification = await notifyAction.save();
      request.status = "Accepted";
      const updatedRequest = await request.save();
      const updatedCommunity = await CommunityModel.findByIdAndUpdate(
        communityId,
        { $push: { members: request.connectionRequest } },
        { new: true }
      );
      await user.updateOne({ $push: { notifications: newNotification } });
      res
        .status(200)
        .json({ community: updatedCommunity, request: updatedRequest });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};
export const declineCommunityReq = async (req, res) => {
  try {
    const { ownerId, communityId, requestId } = req.body;
    const request = await connectModel.findById(requestId);
    const community = await CommunityModel.findById(communityId);
    if (!request) return res.status(404).json("Request not found");
    const user = await UserModel.findById(request?.connectionRequest);
    // Check authorization of data
    if (!user) return res.status(404).json("User not found");
    if (!community) return res.status(404).json("Community not found");
    if (ownerId !== community.ownerId) {
      return res.status(403).json("Unauthorized action");
    } else {
      // Notify community user of community acceptance
      const notifyAction = new NotificationModel({
        Image: community.communityProfile?.url,
        header: `Join Request Declined😢`,
        body: `We're sorry to inform you that your request to join <strong>${community.communityName}</strong> has been declined. We encourage you to explore other communities that may suit your interests.`,
        slugName: community.communitySlug,
        ownerId: user._id,
        reactId: ownerId,
        notifyType: "community-request",
      });
      const newNotification = await notifyAction.save();
      request.status = "Declined";
      const updatedRequest = await request.save();
      const updatedCommunity = await CommunityModel.findByIdAndUpdate(
        communityId,
        { $push: { members: request.connectionRequest } },
        { new: true }
      );
      await user.updateOne({ $push: { notifications: newNotification } });
      await request.deleteOne();
      res
        .status(200)
        .json({ community: updatedCommunity, request: updatedRequest });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
};
