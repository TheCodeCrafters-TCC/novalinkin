import express from "express"
import signUpController from "../controllers/index.js"
import { signUpValidator } from "../validators/auth.js";
import validate from "../validators/validate.js";

export const router = express.Router();

router.post('/sign-up', signUpValidator, validate, signUpController)