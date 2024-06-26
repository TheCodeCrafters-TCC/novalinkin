import { ExploreContainer, MobileNavBar } from "@/components";
import Head from "next/head";
import React from "react";

const Explore = () => {
  return (
    <>
      <Head>
        <title>Explore | NovaLinkin</title>
      </Head>
      <MobileNavBar hasModeIcon hasUserIcon />
      <ExploreContainer />
    </>
  );
};

export default Explore;
