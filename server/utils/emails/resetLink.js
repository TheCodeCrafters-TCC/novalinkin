import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { userOne_gmail, userOne_mail_slurp, userTwo_gmail } from "./users.js";

dotenv.config();

const resetLink = async ({ emailTo, resetUrl }) => {
  const transporter = nodemailer.createTransport(userOne_gmail);

  const message = {
    to: emailTo,
    subject: "Password Reset",
    html: `
      <h1>Password Reset</h1>
      <p>You requested a password reset. Click the link below to reset your password:</p>
      <a href="${resetUrl}">${resetUrl}</a>
        `,
  };

  transporter
    .sendMail(message)
    .then(() => console.log("Link sent"))
    .catch((err) => console.log({ "Err sending link": err.message }));

  console.log("sent successfully");
};

export default resetLink;
