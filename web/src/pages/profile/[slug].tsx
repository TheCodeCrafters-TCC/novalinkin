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
  isLoading: boolean;
}

const Slug: React.FC<SlugProps> = ({ slug, isLoading }) => {
  const dispatch = useAppDispatch();
  dispatch(setProfileQuery(slug as any));
  const Name = capitalizeAndRemoveHyphen(slug as string);
  return (
    <>
      <Head>
        <title>{Name} | NovaLinkin</title>
      </Head>
      <div>
        <InfoPageHeader filter />
        <Profile isfetching={isLoading} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  let isLoading = true;

  return {
    props: { slug, isLoading },
  };
};

export default Slug;
