import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    slugName: { type: String, required: true }, // generation required for user access
    email: { type: String, unique: true, required: true },
    gender: { type: String },
    password: { type: String, required: true },
    userProfile: { type: Object }, // accept cloudinary image property
    isVerified: { type: Boolean },
    articles: { type: Array, default: [] },
    community: { type: Array, default: [] },
    connections: { type: Array, default: [] },
    notifications: { type: Array, default: [] },
    chats: { type: Array, default: [] },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;
