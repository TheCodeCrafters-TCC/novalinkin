import express from "express";
import validate from "../validators/validate.js";
import {
  // findCodeAndVerifyEmail,
  // forgottenPassword,
  signInController,
  signUpController,
  verifyEmail,
} from "../controllers/index.js";
import {
  signInValidator,
  signUpValidator,
  emailValidator,
} from "../validators/auth.js";
import {
  findCodeAndVerifyEmail,
  forgottenPassword,
} from "../controllers/auth.js";
export const authRoutes = express.Router();

authRoutes.post("/sign-up", signUpValidator, validate, signUpController);

authRoutes.post("/sign-in", signInValidator, validate, signInController);

authRoutes.post(
  "/send-verification-email",
  emailValidator,
  validate,
  verifyEmail
);

authRoutes.patch(
  "/verify-email",
  emailValidator,
  validate,
  findCodeAndVerifyEmail
);
authRoutes.post(
  "/forgotten-password",
  emailValidator,
  validate,
  forgottenPassword
);

authRoutes.get("/", (req, res, next) => {
  res.send("Hello");
});
