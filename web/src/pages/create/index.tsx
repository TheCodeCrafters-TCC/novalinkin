import { CreateContainer } from "@/components";
import { FeedWrapper } from "@/styles/components/styled";
import { poppinsSemibold } from "@/styles/global";
import { StyledCreate } from "@/styles/pages/styled";
import Head from "next/head";
import React from "react";

const Create = () => {
  return (
    <>
      <Head>
        <title>Create | NovaLinkin</title>
      </Head>
      <FeedWrapper>
        <StyledCreate>
          <h1 className={poppinsSemibold.className}>
            What would you like to create?
          </h1>
          <div>
            <CreateContainer />
          </div>
        </StyledCreate>
      </FeedWrapper>
    </>
  );
};

export default Create;
