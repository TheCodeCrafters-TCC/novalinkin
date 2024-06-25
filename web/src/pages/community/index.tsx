import { CommunityContainer } from "@/components";
import { InfoPageHeader } from "@/lib";
import Head from "next/head";
import React from "react";

const Community = () => {
  return (
    <>
      <Head>
        <title>Community | NovaLinkin</title>
      </Head>
      <InfoPageHeader filter label="Community" />
      <CommunityContainer />
    </>
  );
};

export default Community;
