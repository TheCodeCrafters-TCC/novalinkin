import express from "express";
import validate from "../validators/validate.js";
import { signInController, signUpController } from "../controllers/auth.js";
import { signInValidator, signUpValidator, emailValidator } from "../validators/auth.js";
import { verifyEmail } from "../controllers/auth.js";

export const router = express.Router();

router.post("/sign-up", signUpValidator, validate, signUpController);

router.post("/sign-in", signInValidator, validate, signInController);

router.post("/send-verification-email", emailValidator, validate, verifyEmail);

router.get("/", (req, res, next) => {
  res.send("Hello");
});
