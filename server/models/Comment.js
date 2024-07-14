//Initialization of comment schema
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    articleId: { type: String, required: true },
    userName: { type: String, required: true },
    slugName: { type: String, required: true },
    userProfile: { type: Object },
    isVerified: { type: Boolean },
    desc: { type: String, required: true },
    likes: { type: Array, default: [] },
    image: { type: Object },
    //  replys: { type: Array },
  },
  { timestamps: true }
);

const CommentModel = mongoose.model("comment", CommentSchema);
export default CommentModel;
