import { commdata } from "@/constants/community";
import { AllCommunityContainer } from "@/styles/components/styled";
import React from "react";
import AllContent from "./AllContent";
import { useRouter } from "next/router";
import { Empty, NetworkDown, Not_Found_404 } from "@/lib";
import CommunityBuffer from "../skeleton/CommunityBuffer";
import { useAppSelector } from "@/hooks/state";
import { commMsg } from "@/constants/system";
import { useCreateCommunity } from "@/context/useCreateCommunity";

const All = () => {
  const router = useRouter();
  const { query } = router.query;
  const communityState = useAppSelector((state) => state.community);
  const noCom = communityState.communities.length < 1;
  const communities = communityState.communities;
  const netError = communityState.fetching_status == "failed";

  const Queried = communities.filter((cm) =>
    cm.communityName.toLowerCase().includes(query as string)
  );
  const returnedData = query ? Queried : communities;
  const not_found = returnedData.length < 1;
  const isLoading = false;
  const { onOpen } = useCreateCommunity();
  return (
    <AllCommunityContainer>
      {netError ? (
        <NetworkDown />
      ) : noCom ? (
        <Empty
          label={commMsg.all_text}
          header={commMsg.all_header}
          clickAble
          clickLabel="Create now"
          clickAction={onOpen}
        />
      ) : isLoading ? (
        <>
          <CommunityBuffer />
          <CommunityBuffer />
          <CommunityBuffer />
          <CommunityBuffer />
        </>
      ) : not_found ? (
        <Not_Found_404 style={{ height: "70vh" }} />
      ) : (
        returnedData.map((comm, index) => (
          <AllContent key={index} comm={comm} />
        ))
      )}
    </AllCommunityContainer>
  );
};

export default All;
