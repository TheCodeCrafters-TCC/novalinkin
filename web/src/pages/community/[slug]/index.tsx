import { CommunityProfile } from "@/components";
import { commdata } from "@/constants/community";
import { InfoPageHeader } from "@/lib";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface SlugProps {
  community: any;
}

const Community_Slug: React.FC<SlugProps> = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{slug} | Community</title>
      </Head>
      <InfoPageHeader label={slug} />
      <CommunityProfile />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;

  return {
    props: {},
  };
};

export default Community_Slug;
