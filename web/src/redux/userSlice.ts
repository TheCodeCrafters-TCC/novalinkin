import { UserStateType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import {
  acceptReq,
  declineReq,
  getAllUsers,
  getCurrentUser,
  getUserRequests,
  sendConnectionReq,
  unconnectUser,
  updateCurrentUser,
  updateCurrentUserProfile,
} from "./thunks/user";
import { onToast } from "@/lib/components/ToastContainer";

const initialState: UserStateType = {
  users: [],
  currentUser: {
    _id: "",
    firstName: "",
    lastName: "",
    slugName: "",
    email: "",
    isVerified: false,
    articles: [],
    community: [],
    connections: [],
    requests: [],
    description: "",
    userProfile: "",
    createdAt: "",
    website: "",
    location: "",
    twitter_url: "",
    linkedin_url: "",
  },
  connect_req: [],
  fetching_status: "",
  fetching_error: "",
  fetching_current_status: "",
  fetching_current_error: "",
  updating_status: "",
  updating_error: "",
  fetching_req_status: "",
  fetching_req_error: "",
  connect_req_status: "",
  connect_req_error: "",
  updating_profile_status: "",
  updating_profile_error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllUsers.pending, (state) => {
      return { ...state, fetching_status: "pending" };
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      return {
        ...state,
        fetching_status: "successful",
        users: action.payload,
      };
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      return {
        ...state,
        fetching_status: "failed",
        fetching_error: action.payload,
      };
    });
    builder.addCase(getCurrentUser.pending, (state) => {
      return { ...state, fetching_current_status: "pending" };
    });
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      return {
        ...state,
        fetching_current_status: "successful",
        currentUser: action.payload,
      };
    });
    builder.addCase(getCurrentUser.rejected, (state, action) => {
      return {
        ...state,
        fetching_current_status: "failed",
        fetching_current_error: action.payload,
      };
    });
    builder.addCase(updateCurrentUser.pending, (state) => {
      return { ...state, updating_status: "pending" };
    });
    builder.addCase(updateCurrentUser.fulfilled, (state, action) => {
      onToast("success", "Profile updated");
      const token = action.payload.token;
      global.localStorage?.setItem("token", token);
      return {
        ...state,
        updating_status: "successful",
        currentUser: action.payload?.user,
      };
    });
    builder.addCase(updateCurrentUser.rejected, (state, action) => {
      return {
        ...state,
        updating_error: action.payload,
        updating_status: "failed",
      };
    });
    builder.addCase(getUserRequests.pending, (state) => {
      return { ...state, fetching_req_status: "pending" };
    });
    builder.addCase(getUserRequests.fulfilled, (state, action) => {
      return {
        ...state,
        fetching_req_status: "successful",
        connect_req: action.payload,
      };
    });
    builder.addCase(getUserRequests.rejected, (state, action) => {
      return {
        ...state,
        fetching_req_status: "failed",
        fetching_req_error: action.payload,
      };
    });
    builder.addCase(sendConnectionReq.pending, (state) => {
      return { ...state, connect_req_status: "pending" };
    });
    builder.addCase(sendConnectionReq.fulfilled, (state) => {
      onToast("success", "Request sent");
      return { ...state, connect_req_status: "successful" };
    });
    builder.addCase(sendConnectionReq.rejected, (state, action) => {
      return {
        ...state,
        connect_req_status: "failed",
        connect_req_error: action.payload,
      };
    });
    builder.addCase(declineReq.pending, (state) => {
      console.log("Declining...");
    });
    builder.addCase(declineReq.fulfilled, (state, action) => {
      onToast("info", "Request declined");
      const updatedReqs = state.connect_req.filter(
        (r) => r._id !== action.payload?.data._id
      );
      return { ...state, connect_req: updatedReqs };
    });
    builder.addCase(declineReq.rejected, (state) => {
      console.log("Something went wrong");
    });
    builder.addCase(acceptReq.pending, (state) => {
      console.log("Accepting...");
    });
    builder.addCase(acceptReq.fulfilled, (state, action) => {
      onToast("success", "Request accepted 🎉");
      const updatedReqs = state.connect_req.filter(
        (r) => r._id !== action.payload?.data._id
      );
      return { ...state, connect_req: updatedReqs };
    });
    builder.addCase(acceptReq.rejected, (state, action) => {
      console.log("Something went wrong:", action.payload);
    });
    builder.addCase(unconnectUser.pending, (state) => {
      console.log("Unparing...");
    });
    builder.addCase(unconnectUser.fulfilled, (state) => {
      onToast("success", "Unpaired");
    });
    builder.addCase(unconnectUser.rejected, (state, action) => {
      console.log("Unpair error:", action.payload);
    });
    builder.addCase(updateCurrentUserProfile.pending, (state, action) => {
      return { ...state, updating_profile_status: "pending" };
    });
    builder.addCase(updateCurrentUserProfile.fulfilled, (state, action) => {
      onToast("success", "Profile updated");
      global.localStorage?.setItem("token", action.payload.token);
      return {
        ...state,
        updating_profile_status: "successful",
        currentUser: action.payload.user,
      };
    });
    builder.addCase(updateCurrentUserProfile.rejected, (state, action) => {
      return {
        ...state,
        updating_profile_error: action.payload,
        updating_profile_status: "failed",
      };
    });
  },
});

export default userSlice.reducer;
