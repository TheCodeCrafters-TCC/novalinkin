import { Share } from "@/components";
import { StyledShare } from "@/styles/pages/styled";
import Head from "next/head";
import React from "react";

const CreateArticle = () => {
  return (
    <>
      <Head>
        <title>CreateArticle | NovaLinkin</title>
      </Head>
      <StyledShare>
        <Share />
      </StyledShare>
    </>
  );
};

export default CreateArticle;
