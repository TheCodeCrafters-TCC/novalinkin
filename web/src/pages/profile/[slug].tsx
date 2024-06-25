import { Profile } from "@/components";
import Head from "next/head";
import React, { startTransition, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { InfoPageHeader } from "@/lib";
import { useAppDispatch } from "@/hooks/state";
import { setProfileQuery } from "@/redux/systemSlice";
import { capitalizeAndRemoveHyphen } from "@/lib/hooks";

interface SlugProps {
  slug: string | null;
}

const Slug: React.FC<SlugProps> = ({ slug }) => {
  const dispatch = useAppDispatch();
  const Name = capitalizeAndRemoveHyphen(slug as string);

  useEffect(() => {
    startTransition(() => {
      dispatch(setProfileQuery(slug as any));
    });
  }, [dispatch, slug]);

  return (
    <>
      <Head>
        <title>{Name} | NovaLinkin</title>
      </Head>
      <div>
        <InfoPageHeader filter />
        <Profile />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;

  return {
    props: { slug },
  };
};

export default Slug;
