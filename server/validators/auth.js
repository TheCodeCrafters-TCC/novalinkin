import { check } from "express-validator";

export const signUpValidator = [
  check("firstName").notEmpty().withMessage("First Name Is REQUIRED"),

  check("lastName").notEmpty().withMessage("Last Name Is REQUIRED"),

  check("email")
    .isEmail()
    .withMessage("E-mail must be valid email")
    .notEmpty()
    .withMessage("E-mail is required"),

  check("password")
    .isLength({ min: 6 })
    .withMessage("Password should be 6 or more characters long")
    .notEmpty()
    .withMessage("Password is required"),
];

export const signInValidator = [
  check("email")
    .isEmail()
    .withMessage("invalid credentials")
    .notEmpty()
    .withMessage("e-mail is required"),

  check("password").notEmpty().withMessage("password is required"),
];

export const emailValidator = [
    check("email")
    .isEmail()
    .withMessage("Invalid Email")
    .notEmpty()
    .withMessage("Email is required")
];
