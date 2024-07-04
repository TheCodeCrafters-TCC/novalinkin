import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { userTwo_gmail } from "./users.js";

dotenv.config();

const sendEmail = async ({ emailTo, subject, code, content }) => {
  const transporter = nodemailer.createTransport(userTwo_gmail);

  const message = {
    to: emailTo,
    subject,
    html: `
            <div>
              <h3>Your 6-digit Code to ${content}</h3>
              <p>Code: ${code}</p>
            </div>
        `,
  };

  transporter
    .sendMail(message)
    .then(() => console.log("Code sent"))
    .catch((err) => console.log({ err: err.message }));

  console.log("sent successfully");
};

export default sendEmail;
