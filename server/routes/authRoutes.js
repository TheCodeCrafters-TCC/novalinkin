import express from "express";
import validate from "../validators/validate.js";
import { signInController, signUpController, verifyEmail } from "../controllers/index.js";
import { signInValidator, signUpValidator, emailValidator } from "../validators/auth.js";

export const authRoutes = express.Router();

authRoutes.post("/sign-up", signUpValidator, validate, signUpController);

authRoutes.post("/sign-in", signInValidator, validate, signInController);

authRoutes.post("/send-verification-email", emailValidator, validate, verifyEmail);