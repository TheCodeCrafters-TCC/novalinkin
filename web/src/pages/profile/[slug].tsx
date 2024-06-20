import { NoSSRBar, Profile, InfoPageHeader } from "@/components";
import Head from "next/head";
import React from "react";
import { GetServerSideProps } from "next";

interface SlugProps {
  slug: string | null;
}

const Slug: React.FC<SlugProps> = ({ slug }) => {
  return (
    <>
      <Head>
        <title>{slug} | Connectify</title>
      </Head>
      <div>
        <NoSSRBar infoPage hasFilterIcon />
        <Profile />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;

  console.log("Found:", slug);

  return {
    props: { slug },
  };
};

export default Slug;
