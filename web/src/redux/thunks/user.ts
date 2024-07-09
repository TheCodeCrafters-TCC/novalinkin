import { DEV_URL } from "@/hooks/url";
import { onToast } from "@/lib/components/ToastContainer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk(
  "user/all",
  async (i, { rejectWithValue }) => {
    try {
      const users = await axios.get(`${DEV_URL}/users`);
      return users?.data?.data;
    } catch (error: any) {
      console.log({ error: error?.response?.data });
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "user/current",
  async (slug: any, { rejectWithValue }) => {
    try {
      const currentUser = await axios.get(`${DEV_URL}/users/find/${slug}`);
      return currentUser?.data?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log({ error: error?.response?.data });
      return rejectWithValue(error?.response?.data);
    }
  }
);

type FormProps = {
  firstName: string | any;
  lastName: string | any;
  description: string | any;
  location: string | any;
  website: string | any;
  twitter_url: string | any;
  linkedin_url: string | any;
};

interface UpdateProps {
  userId: string | any;
  form: FormProps;
}

export const updateCurrentUser = createAsyncThunk(
  "user/current-update",
  async ({ userId, form }: UpdateProps, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${DEV_URL}/users/update/profile/${userId}`,
        { form: form }
      );
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log({ error: error?.response?.data });
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getUserRequests = createAsyncThunk(
  "user/request",
  async (userId: string, { rejectWithValue }) => {
    try {
      const requests = await axios.get(
        `${DEV_URL}/users/request/all/${userId}`
      );
      return requests?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log({ error: error?.response?.data });
      return rejectWithValue(error?.response?.data);
    }
  }
);

interface CurrentProps {
  connectionRequest: string | any;
  receiverId: string | any;
}

export const sendConnectionReq = createAsyncThunk(
  "user/connect",
  async (
    { connectionRequest, receiverId }: CurrentProps,
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.patch(`${DEV_URL}/users/send-request`, {
        connectionRequest: connectionRequest,
        requestId: receiverId,
      });
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log({ error: error?.response?.data });
      return rejectWithValue(error?.response?.data);
    }
  }
);

interface ReqActionProps {
  userId: string | any;
  connectId: string | any;
}

export const declineReq = createAsyncThunk(
  "user/decline-request",
  async ({ userId, connectId }: ReqActionProps, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${DEV_URL}/request/decline`, {
        userId,
        connectId,
      });
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log({ error: error?.response?.data });
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const acceptReq = createAsyncThunk(
  "user/accept-request",
  async ({ userId, connectId }: ReqActionProps, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${DEV_URL}/request/accept`, {
        userId,
        connectId,
      });
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log({ error: error?.response?.data });
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const unconnectUser = createAsyncThunk(
  "user/unconnect",
  async ({ userId, connectId }: ReqActionProps, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${DEV_URL}/request/unconnect`, {
        userId,
        connectId,
      });
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log({ error: error?.response?.data });
      return rejectWithValue(error?.response?.data);
    }
  }
);

interface UpdateProp {
  userId: string | any;
  image: string | any;
}

export const updateCurrentUserProfile = createAsyncThunk(
  "user/update-userprofile",
  async ({ userId, image }: UpdateProp, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${DEV_URL}/users/update/userprofile/${userId}`,
        { image }
      );
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data?.error}`);
      console.log({ error: error?.response?.data?.error });
      return rejectWithValue(error?.response?.data?.error);
    }
  }
);
