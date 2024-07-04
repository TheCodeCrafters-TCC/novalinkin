import mongoose from "mongoose"

const ConnectionSchema = new mongoose.Schema({
    connectionRequest: {type: String, required: true},
    requestId: {type: String, required: true},
    status: {type: String, default: "Pending"}
}, {timestamps: true});

const connectModel = mongoose.model("connections", ConnectionSchema);

export default connectModel;
