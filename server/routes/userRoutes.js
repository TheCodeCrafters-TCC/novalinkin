import express from "express";
import {
  allUsersController,
  findBySlug,
  findById,
  connectionRequest,
  deleteAccount,
  updateProfile,
  getUserRequests,
} from "../controllers/index.js";
import { updateUserProfile } from "../controllers/users.js";

const userRoutes = express.Router();

userRoutes.get("/", allUsersController);
userRoutes.get("/find/:slug", findBySlug);
userRoutes.get("/find-by-id/:id", findById);
userRoutes.get("/request/all/:userId", getUserRequests);

userRoutes.patch("/send-request", connectionRequest);
userRoutes.patch("/update/profile/:userId", updateProfile);
userRoutes.patch("/update/userprofile/:userId", updateUserProfile);

userRoutes.delete("/delete-account/:id", deleteAccount);

export default userRoutes;
