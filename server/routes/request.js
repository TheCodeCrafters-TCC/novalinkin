import express from "express";
import {
  acceptRequest,
  declineRequest,
  findUserRequest,
  unDoConnection,
} from "../controllers/request.js";

const ReqRoutes = express.Router();

ReqRoutes.get("/current/:rId/one/:cId", findUserRequest);
ReqRoutes.patch("/accept", acceptRequest);
ReqRoutes.patch("/decline", declineRequest);
ReqRoutes.patch("/unconnect", unDoConnection);

export default ReqRoutes;
