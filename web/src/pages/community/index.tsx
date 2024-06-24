import { CommunityContainer } from "@/components";
import { InfoPageHeader } from "@/lib";
import Head from "next/head";
import React from "react";

const Community = () => {
  return (
    <>
      <Head>
        <title>Community | Connectify</title>
      </Head>
      <InfoPageHeader filter />
      <CommunityContainer />
    </>
  );
};

export default Community;
