//Initialization of community schema
import mongoose from "mongoose";

const CommunitySchema = new mongoose.Schema(
  {
    ownerId: { type: String, required: true },
    members: { type: Array, default: [] },
    joinRequest: { type: Array, default: [] },
    invitationCode: { type: String, required: true },
    communityName: { type: String, required: true },
    communityDesc: { type: String },
    communityProfile: { type: Object },
    communityType: { type: String, required: true },
    joinOption: { type: String, required: true },
    communitySlug: { type: String, required: true },
    hasCommunityCheck: { type: Boolean, default: false }, // community verification check
    articles: { type: Array, default: [] },
    permissions: { type: Array, default: [] },
    isAdmin: { type: Array, default: [] },
  },
  { timestamps: true }
);

const CommunityModel = mongoose.model("community", CommunitySchema);
export default CommunityModel;
