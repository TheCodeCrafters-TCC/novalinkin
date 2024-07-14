import { DEV_URL, PRO_URL } from "@/hooks/url";
import { onToast } from "@/lib/components/ToastContainer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createCommunity = createAsyncThunk(
  "community/new",
  async (
    {
      communityDesc,
      communityName,
      communityProfile,
      communityType,
      joinOption,
      ownerId,
    }: CommunityReqBody,
    { rejectWithValue }
  ) => {
    try {
      const community = await axios.post(
        `${PRO_URL}/community/create/${ownerId}`,
        {
          communityDesc,
          communityName,
          communityProfile,
          communityType,
          joinOption,
        }
      );
      return community.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getCommunities = createAsyncThunk(
  "community/all",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${PRO_URL}/community/all`);
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getCommunity = createAsyncThunk(
  "community/one",
  async (slug: string | any, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${PRO_URL}/community/one/${slug}`);
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getUserCommunities = createAsyncThunk(
  "community/belong",
  async (userId: string | any, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${PRO_URL}/community/belong/${userId}`);
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const findPrivateCommunity = createAsyncThunk(
  "community/one/private",
  async (url: string | any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${PRO_URL}/community/one/private/invite?${url}`
      );
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getCreatorCommunities = createAsyncThunk(
  "community/all/creator",
  async (ownerId: string | any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${PRO_URL}/community/all/creator/${ownerId}`
      );
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

interface DeleteProps {
  ownerId: string | any;
  communityId: string | any;
}

export const deleteCommunity = createAsyncThunk(
  "community/delete",
  async ({ ownerId, communityId }: DeleteProps, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${PRO_URL}/community/delete/${ownerId}/one/${communityId}`
      );
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

interface JoinProps {
  userId: string | any;
  communityId: string | any;
}

export const joinCommunity = createAsyncThunk(
  "community/join",
  async ({ userId, communityId }: JoinProps, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${PRO_URL}/community/current/join`, {
        userId,
        communityId,
      });
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const leaveCommunity = createAsyncThunk(
  "community/leave",
  async ({ userId, communityId }: JoinProps, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${PRO_URL}/community/current/leave`, {
        userId,
        communityId,
      });
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const fetchJoinRequest = createAsyncThunk(
  "community/fetch-join_request",
  async (communityId: string | any, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${PRO_URL}/community/all/request/${communityId}`
      );
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

interface ReqProps {
  ownerId: string | any;
  communityId: string | any;
  requestId: string | any;
}

export const acceptJoinRequest = createAsyncThunk(
  "community/accept-join_request",
  async (
    { ownerId, communityId, requestId }: ReqProps,
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.patch(
        `${PRO_URL}/community/current/accept`,
        { ownerId, communityId, requestId }
      );
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const declineJoinRequest = createAsyncThunk(
  "community/decline-join_request",
  async (
    { ownerId, communityId, requestId }: ReqProps,
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.patch(
        `${PRO_URL}/community/current/decline`,
        { ownerId, communityId, requestId }
      );
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);
