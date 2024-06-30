import { AllNotifications } from "@/components";
import { NotificationHeader } from "@/lib";
import Head from "next/head";
import React from "react";

const Notifications = () => {
  return (
    <>
      <Head>
        <title>Notifications | NovaLinkin</title>
      </Head>
      <NotificationHeader label="Notification" />
      <AllNotifications />
    </>
  );
};

export default Notifications;
