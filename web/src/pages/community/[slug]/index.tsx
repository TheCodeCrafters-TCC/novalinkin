import { CommunityProfile, ConfirmDelete } from "@/components";
import { commdata } from "@/constants/community";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { InfoPageHeader } from "@/lib";
import { getCommunity } from "@/redux/thunks/community";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface SlugProps {
  community: any;
}

const Community_Slug: React.FC<SlugProps> = () => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useAppDispatch();
  const communityState = useAppSelector((state) => state.community);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getCommunity(slug));
  }, [slug]);

  return (
    <>
      <Head>
        <title>
          {communityState.currentCommunity.communityName} | Community
        </title>
      </Head>
      <InfoPageHeader
        hasBinIcon
        label={communityState.currentCommunity.communityName}
        addActionClick={() => setIsOpen(true)}
      />
      {isOpen && <ConfirmDelete setIsOpen={setIsOpen} isOpen={isOpen} />}
      <CommunityProfile />
    </>
  );
};

export default Community_Slug;
