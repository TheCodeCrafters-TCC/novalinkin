import { Container } from "@/components";
import { useAppSelector } from "@/hooks/state";
import { InfoPageHeader } from "@/lib";
import { capitalizeAndRemoveHyphen } from "@/lib/hooks";
import Head from "next/head";
import React from "react";

const Connections = () => {
  const pQuery = useAppSelector((state) => state.system.query.profileSlug);
  const Name = capitalizeAndRemoveHyphen(pQuery as string);

  return (
    <>
      <Head>
        <title>{Name} - Connections | Connectify</title>
      </Head>
      <InfoPageHeader filter />
      <Container header={`All ${Name} Connections`} hasNavBack />
    </>
  );
};

export default Connections;
