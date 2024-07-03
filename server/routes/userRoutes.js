import express from "express";
import { allUsersController } from "../controllers/index.js";


const userRoutes = express.Router();

userRoutes.get("/", allUsersController);

export default userRoutes;