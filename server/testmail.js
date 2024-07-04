import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";
import ejs from "ejs";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Construct the absolute path to the HTML template
const templatePath = path.resolve(__dirname, "template", "welcome.html");

// Read the HTML file
const template = fs.readFileSync(templatePath, "utf-8");
const data = { name: "Rapheal" };
const welcomeTem = ejs.render(template, data);

const from = "22b767dc-0ee1-4792-ae28-4328e4b49cd0@mailslurp.net";
const to = "www.rashyking05@gmail.com";
const subject = "Tesing email";
const html = welcomeTem;
const transporter = nodemailer.createTransport({
  host: "mxslurp.click",
  port: 2525,
  secure: false,
  auth: {
    user: "22b767dc-0ee1-4792-ae28-4328e4b49cd0@mailslurp.net",
    pass: "0cJFiVOCx0Gcnv78nb1XNdVjNVr4Pra6",
  },
});

const message = {
  subject,
  html,
  from,
  to,
};

transporter
  .sendMail(message)
  .then(() => console.log("Mail sent"))
  .catch((err) => console.log({ err: err.message }));
