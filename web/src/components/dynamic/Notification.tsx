import React from "react";
import AppNotificationBar from "../notifications/AppNotificationBar";
import { DynamicWrap } from "@/styles/global";

const Notification = () => {
  return (
    <DynamicWrap>
      <AppNotificationBar />
    </DynamicWrap>
  );
};

export default Notification;
