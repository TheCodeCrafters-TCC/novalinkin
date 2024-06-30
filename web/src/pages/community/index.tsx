import { CommunityContainer } from "@/components";
import { useCreateCommunity } from "@/context/useCreateCommunity";
import { InfoPageHeader } from "@/lib";
import Head from "next/head";
import React from "react";

const Community = () => {
  const { onOpen } = useCreateCommunity();
  return (
    <>
      <Head>
        <title>Community | NovaLinkin</title>
      </Head>
      <InfoPageHeader filter label="Community" hasAdd addActionClick={onOpen} />
      <CommunityContainer />
    </>
  );
};

export default Community;
