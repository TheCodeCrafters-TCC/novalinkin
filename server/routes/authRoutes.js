import express from "express"
import signUpController from "../controllers/index.js"
import { signUpValidator } from "../validators/auth.js";
import { signInValidator } from "../validators/auth.js";
import validate from "../validators/validate.js";
import { signInController } from "../controllers/auth.js";

export const router = express.Router();

router.post("/sign-up", signUpValidator, validate, signUpController)

router.post("/sign-in", signInValidator, validate, signInController)

router.get("/", (req, res, next) => {
    res.send("Hello");
})