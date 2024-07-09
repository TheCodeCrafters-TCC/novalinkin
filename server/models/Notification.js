import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema(
  {
    ownerId: { type: String, required: true }, // user who'll get the notification
    notifyType: { type: String, required: true },
    header: { type: String, required: true },
    body: { type: String, required: true },
    reactId: { type: String }, // ID of the reactor
    objectId: { type: String }, // ID of the item reacter to
    slugName: { type: String }, // ID of the item reacter to
    seen: { type: Boolean, default: false },
    Image: { type: Object },
  },
  { timestamps: true }
);

const NotificationModel = mongoose.model("notification", NotificationSchema);
export default NotificationModel;
