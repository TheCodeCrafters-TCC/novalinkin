import { Container } from "@/components";
import { InfoPageHeader } from "@/lib";
import Head from "next/head";
import React from "react";

const Connect = () => {
  return (
    <>
      <Head>
        <title>Connect | Connectify</title>
      </Head>
      <InfoPageHeader filter />
      <Container />
    </>
  );
};

export default Connect;
