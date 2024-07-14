import nodemailer from "nodemailer";
import { userOne_gmail, userTwo_gmail } from "./emails/users.js";

const sendEmail = async ({ emailTo, subject, code, content }) => {
  const transporter = nodemailer.createTransport(userOne_gmail);

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

  transporter.sendMail(message);

  console.log("sent successfully");
};

export default sendEmail;
