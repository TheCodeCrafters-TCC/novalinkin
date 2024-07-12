import { CommunityStateType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import {
  acceptJoinRequest,
  createCommunity,
  declineJoinRequest,
  deleteCommunity,
  fetchJoinRequest,
  findPrivateCommunity,
  getCommunities,
  getCommunity,
  getCreatorCommunities,
  getUserCommunities,
  joinCommunity,
  leaveCommunity,
} from "./thunks/community";
import { onToast } from "@/lib/components/ToastContainer";

const initialState: CommunityStateType = {
  communities: [],
  creator_communities: [],
  belongTo: [],
  private_community: [],
  current_req: [],
  currentCommunity: {
    _id: "",
    ownerId: "",
    members: [],
    joinRequest: [],
    invitationCode: "",
    communityName: "",
    communityDesc: "",
    communityProfile: "",
    joinOption: "",
    communitySlug: "",
    articles: [],
    permissions: [],
    isAdmin: [],
    communityType: "",
    hasCommunityCheck: false,
    createdAt: "",
  },
  fetching_status: "",
  fetching_error: "",
  fetching_current_status: "",
  fetching_current_error: "",
  creation_error: "",
  creation_status: "",
  fetching_private_status: "",
  fetching_private_error: "",
  fetching_in_status: "",
  fetching_in_error: "",
  fetching_creator_status: "",
  fetching_creator_error: "",
  join_status: "",
  join_error: "",
  delete_status: "",
  delete_error: "",
  leave_status: "",
  leave_error: "",
  fetch_req_status: "",
  fetch_req_error: "",
  accepting_req_status: "",
  accepting_req_error: "",
  rejecting_req_status: "",
  rejecting_req_error: "",
};

const CommunitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createCommunity.pending, (state) => {
      return { ...state, creation_status: "pending" };
    });
    builder.addCase(createCommunity.fulfilled, (state: any, action) => {
      onToast("success", "Created 🎉");
      const updatedCommunity = [action.payload, ...state.communities];
      return {
        ...state,
        creation_status: "successful",
        communities: updatedCommunity,
      };
    });
    builder.addCase(createCommunity.rejected, (state, action) => {
      return {
        ...state,
        creation_error: action.payload,
        creation_status: "failed",
      };
    });
    builder.addCase(getCommunities.pending, (state) => {
      return { ...state, fetching_status: "pending" };
    });
    builder.addCase(getCommunities.fulfilled, (state, action) => {
      return {
        ...state,
        fetching_status: "successful",
        communities: action.payload,
      };
    });
    builder.addCase(getCommunities.rejected, (state, action) => {
      return {
        ...state,
        fetching_status: "failed",
        fetching_error: action.payload,
      };
    });
    builder.addCase(getCommunity.pending, (state) => {
      return { ...state, fetching_current_status: "pending" };
    });
    builder.addCase(getCommunity.fulfilled, (state, action) => {
      return {
        ...state,
        fetching_current_status: "successful",
        currentCommunity: action.payload,
      };
    });
    builder.addCase(getCommunity.rejected, (state, action) => {
      return {
        ...state,
        fetching_current_error: action.payload,
        fetching_current_status: "failed",
      };
    });
    builder.addCase(getUserCommunities.pending, (state) => {
      return { ...state, fetching_in_status: "pending" };
    });
    builder.addCase(getUserCommunities.fulfilled, (state, action) => {
      return {
        ...state,
        fetching_in_status: "successful",
        belongTo: action.payload,
      };
    });
    builder.addCase(getUserCommunities.rejected, (state, action) => {
      return {
        ...state,
        fetching_in_error: action.payload,
        fetching_in_status: "failed",
      };
    });
    builder.addCase(findPrivateCommunity.pending, (state) => {
      return { ...state, fetching_private_status: "pending" };
    });
    builder.addCase(findPrivateCommunity.fulfilled, (state, action) => {
      return {
        ...state,
        fetching_private_status: "successful",
        private_community: action.payload,
      };
    });
    builder.addCase(findPrivateCommunity.rejected, (state, action) => {
      return {
        ...state,
        fetching_private_error: action.payload,
        fetching_private_status: "failed",
      };
    });
    builder.addCase(getCreatorCommunities.pending, (state) => {
      return { ...state, fetching_creator_status: "pending" };
    });
    builder.addCase(getCreatorCommunities.fulfilled, (state, action) => {
      return {
        ...state,
        fetching_creator_status: "successful",
        creator_communities: action.payload,
      };
    });
    builder.addCase(getCreatorCommunities.rejected, (state, action) => {
      return {
        ...state,
        fetching_creator_error: action.payload,
        fetching_creator_status: "failed",
      };
    });
    builder.addCase(joinCommunity.pending, (state) => {
      return { ...state, join_status: "pending" };
    });
    builder.addCase(joinCommunity.fulfilled, (state, action) => {
      onToast("success", `${action.payload?.message}`);
      return {
        ...state,
        join_status: "successful",
        currentCommunity: action.payload?.data,
      };
    });
    builder.addCase(joinCommunity.rejected, (state, action) => {
      return { ...state, join_error: action.payload, join_status: "failed" };
    });
    builder.addCase(deleteCommunity.pending, (state) => {
      return { ...state, delete_status: "pending" };
    });
    builder.addCase(deleteCommunity.fulfilled, (state, action) => {
      onToast("success", "Community deleted");
      const deleted = action.payload?.data;
      const updatedCommunity = state.communities.filter(
        (cm) => cm._id !== deleted._id
      );
      global.window.location.href = "/";
      return {
        ...state,
        delete_status: "successful",
        communities: updatedCommunity,
      };
    });
    builder.addCase(deleteCommunity.rejected, (state, action) => {
      return {
        ...state,
        delete_error: action.payload,
        delete_status: "failed",
      };
    });
    builder.addCase(leaveCommunity.pending, (state) => {
      return { ...state, leave_status: "pending" };
    });
    builder.addCase(leaveCommunity.fulfilled, (state, action) => {
      return {
        ...state,
        leave_status: "successful",
        currentCommunity: action.payload,
      };
    });
    builder.addCase(leaveCommunity.rejected, (state, action) => {
      return { ...state, leave_error: action.payload, leave_status: "failed" };
    });
    builder.addCase(fetchJoinRequest.pending, (state) => {
      return { ...state, fetch_req_status: "pending" };
    });
    builder.addCase(fetchJoinRequest.fulfilled, (state, action) => {
      return {
        ...state,
        fetch_req_status: "successful",
        current_req: action.payload,
      };
    });
    builder.addCase(fetchJoinRequest.rejected, (state, action) => {
      return {
        ...state,
        fetch_req_error: action.payload,
        fetch_req_status: "failed",
      };
    });
    builder.addCase(acceptJoinRequest.pending, (state) => {
      return { ...state, accepting_req_status: "pending" };
    });
    builder.addCase(acceptJoinRequest.fulfilled, (state, action) => {
      const request = action.payload.request;
      const updatedRequest = state.current_req.filter(
        (r) => r._id !== request._id
      );
      return {
        ...state,
        accepting_req_status: "successful",
        currentCommunity: action.payload.community,
        current_req: updatedRequest,
      };
    });
    builder.addCase(acceptJoinRequest.rejected, (state, action) => {
      return {
        ...state,
        accepting_req_error: action.payload,
        accepting_req_status: "failed",
      };
    });
    builder.addCase(declineJoinRequest.pending, (state) => {
      return { ...state, rejecting_req_status: "pending" };
    });
    builder.addCase(declineJoinRequest.fulfilled, (state, action) => {
      const request = action.payload.request;
      const updatedRequest = state.current_req.filter(
        (r) => r._id !== request._id
      );
      return {
        ...state,
        rejecting_req_status: "successful",
        currentCommunity: action.payload.community,
        current_req: updatedRequest,
      };
    });
    builder.addCase(declineJoinRequest.rejected, (state, action) => {
      return {
        ...state,
        rejecting_req_error: action.payload,
        rejecting_req_status: "failed",
      };
    });
  },
});

export default CommunitySlice.reducer;
