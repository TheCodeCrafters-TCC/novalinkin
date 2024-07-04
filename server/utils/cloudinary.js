import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const Cloud = cloudinary.v2;

Cloud.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default Cloud;
