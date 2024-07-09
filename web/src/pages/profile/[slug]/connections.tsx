import { Container, UserNetwork } from "@/components";
import { useAppSelector } from "@/hooks/state";
import { InfoPageHeader } from "@/lib";
import { capitalizeAndRemoveHyphen } from "@/lib/hooks";
import Head from "next/head";
import React from "react";

const Connections = () => {
  const pQuery = useAppSelector((state) => state.system.query.profileSlug);
  const userState = useAppSelector((state) => state.user);
  const currentUser = userState.currentUser;
  const Name = currentUser.firstName + " " + currentUser.lastName;

  return (
    <>
      <Head>
        <title>{Name} - Connections | NovaLinkin</title>
      </Head>
      <InfoPageHeader filter />
      <UserNetwork header={`All ${Name}'s Connections`} hasNavBack />
    </>
  );
};

export default Connections;
