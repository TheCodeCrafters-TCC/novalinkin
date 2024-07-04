import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    slugName: { type: String }, // generation required for user access
    email: { type: String, unique: true, required: true },
    gender: { type: String },
    password: { type: String, required: true },
    userProfile: { type: String, required: true }, // accept cloudinary image property
    verificationCode: { type: String, required: true },
    hasVerified_email: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    articles: { type: Array, default: [] },
    community: { type: Array, default: [] },
    connections: { type: Array, default: [] },
    notifications: { type: Array, default: [] },
    requests: { type: Array, default: [] },
    chats: { type: Array, default: [] },
    resetPasswordToken: String,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;
