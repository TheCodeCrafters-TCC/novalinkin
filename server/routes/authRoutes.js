import express from "express";
import validate from "../validators/validate.js";
import { signInController, signUpController } from "../controllers/auth.js";
import { signInValidator, signUpValidator } from "../validators/auth.js";

export const router = express.Router();

router.post("/sign-up", signUpValidator, validate, signUpController);

router.post("/sign-in", signInValidator, validate, signInController);

router.get("/", (req, res, next) => {
  res.send("Hello");
});
