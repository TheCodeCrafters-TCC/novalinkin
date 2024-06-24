import { MobileNavBar } from "@/components";
import { ComingSoon } from "@/lib";
import Head from "next/head";
import React from "react";

const Chats = () => {
  return (
    <>
      <Head>
        <title>Chats | Connectify</title>
      </Head>
      <MobileNavBar hasModeIcon hasUserIcon />
      <ComingSoon />
    </>
  );
};

export default Chats;
