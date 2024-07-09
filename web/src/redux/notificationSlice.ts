import { NotificationType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { getNotifications, readNotification } from "./thunks/notifications";
import { read } from "fs";

const initialState: NotificationType = {
  unread: [],
  all: [],
  fetch_status: "",
  fetch_error: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setUnread: (state, action) => {
      const data = action.payload;
      state.unread = data;
    },
  },
  extraReducers(builder) {
    builder.addCase(getNotifications.pending, (state, action) => {
      return { ...state, fetch_status: "pending" };
    });
    builder.addCase(getNotifications.fulfilled, (state, action) => {
      return { ...state, fetch_status: "successful", all: action.payload };
    });
    builder.addCase(getNotifications.rejected, (state: any, action) => {
      return { ...state, fetch_status: "failed", fetch_error: action.payload };
    });
    builder.addCase(readNotification.pending, (state) => {
      console.log("Reading...");
    });
    builder.addCase(readNotification.fulfilled, (state, action) => {
      const readNot = action.payload;
      const updatedAll = state.all.map((n) =>
        n._id === readNot._id ? { ...n, ...readNot } : n
      );
      return { ...state, all: updatedAll };
    });
    builder.addCase(readNotification.rejected, (state) => {
      console.log("Error reading notification");
    });
  },
});

export default notificationSlice.reducer;

export const { setUnread } = notificationSlice.actions;
