import express from "express";
import {
  acceptCommunityReq,
  createCommunity,
  declineCommunityReq,
  deleteCommunity,
  findPrivateCommunity,
  getAllCommunity,
  getCommunity,
  getOwnerCommunities,
  getUserCommunities,
  joinCommunity,
  leaveCommunity,
} from "../controllers/community.js";
import {
  acceptRequest,
  declineRequest,
  getAllCommunityReqs,
} from "../controllers/request.js";

const CommunityRoute = express.Router();

CommunityRoute.post("/create/:ownerId", createCommunity);
// get
CommunityRoute.get("/all", getAllCommunity);
CommunityRoute.get("/one/:slug", getCommunity);
CommunityRoute.get("/belong/:userId", getUserCommunities);
CommunityRoute.get("/one/private/invite", findPrivateCommunity);
CommunityRoute.get("/all/creator/:ownerId", getOwnerCommunities);
CommunityRoute.get("/all/request/:communityId", getAllCommunityReqs);
// patch | update
CommunityRoute.patch("/current/join", joinCommunity);
CommunityRoute.patch("/current/leave", leaveCommunity);
CommunityRoute.patch("/current/accept", acceptCommunityReq);
CommunityRoute.patch("/current/decline", declineCommunityReq);
// delete
CommunityRoute.delete("/delete/:ownerId/one/:communityId", deleteCommunity);

export default CommunityRoute;
