//Initialization of article schema
import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    slugName: { type: String, required: true },
    tag: { type: String, required: true },
    desc: { type: String, required: true },
    userProfile: { type: String },
    isVerified: { type: Boolean },
    image: { type: Array }, //accept cloudinary image property
    video: { type: Object }, // accept cloudinary videos property
    likes: { type: Array, defualt: [] },
    comments: { type: Array, defualt: [] },
    views: { type: Array, defualt: [] },
    stars: { type: Array, defualt: [] },
  },
  { timestamps: true }
);

const ArticleModel = mongoose.model("article", ArticleSchema);
export default ArticleModel;
