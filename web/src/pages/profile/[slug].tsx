import { Profile } from "@/components";
import Head from "next/head";
import React from "react";
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
  dispatch(setProfileQuery(slug as any));
  const Name = capitalizeAndRemoveHyphen(slug as string);
  return (
    <>
      <Head>
        <title>{Name} | Connectify</title>
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
