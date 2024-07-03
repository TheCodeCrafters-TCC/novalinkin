import express from "express";
import { allUsersController, findBySlug, findById,  connectionRequest, deleteAccount } from "../controllers/index.js";


const userRoutes = express.Router();

userRoutes.get("/", allUsersController);

userRoutes.get("/find-by-slug/:slugName", findBySlug);

userRoutes.get("/find-by-id/:id", findById);

userRoutes.patch("/send-request", connectionRequest);

userRoutes.delete("/delete-account/:id", deleteAccount);

export default userRoutes;