import { DEV_URL, PRO_URL } from "@/hooks/url";
import { onToast } from "@/lib/components/ToastContainer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNotifications = createAsyncThunk(
  "notification/all",
  async (userId: string | any, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${PRO_URL}/notification/all/${userId}`);
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log({ error: error?.response?.data });
      return rejectWithValue(error?.response?.data);
    }
  }
);

interface ReadProps {
  userId: string | any;
  notificationId: string | any;
}

export const readNotification = createAsyncThunk(
  "notification/readOne",
  async ({ userId, notificationId }: ReadProps, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${PRO_URL}/notification/read/one/${userId}`,
        { notificationId }
      );
      return response?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log({ error: error?.response?.data });
      return rejectWithValue(error?.response?.data);
    }
  }
);
