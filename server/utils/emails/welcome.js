import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";
import ejs from "ejs";
import { fileURLToPath } from "url";
import path from "path";
import { userOne_gmail, userOne_mail_slurp } from "./users.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construct the absolute path to the HTML template
const templatePath = path.resolve(__dirname, "template", "welcome.html");

// Read the HTML file
const template = fs.readFileSync(templatePath, "utf-8");

const welcomeUser = async ({ emailTo, subject, name }) => {
  const from = "22b767dc-0ee1-4792-ae28-4328e4b49cd0@mailslurp.net";
  const to = emailTo;
  const data = { name: name };
  const welcomeTem = ejs.render(template, data);
  const transporter = nodemailer.createTransport(userOne_gmail);

  const message = {
    to,
    subject,
    html: welcomeTem,
    from,
  };

  transporter
    .sendMail(message)
    .then(() => console.log("Mail sent"))
    .catch((err) => console.log({ err: err.message }));
};

export default welcomeUser;
