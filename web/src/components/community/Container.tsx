import { FeedWrapper } from "@/styles/components/styled";
import React, { useEffect, useState } from "react";
import BelongTo from "./BelongTo";
// import All from "./All";
import Header from "./Header";
import styled from "styled-components";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { getUserCommunities } from "@/redux/thunks/community";
// import { Divider } from "@/lib";

const All = dynamic(() => import("./All"), { ssr: false });

const Container = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.userId);
  const communityState = useAppSelector((state) => state.community);
  const isfetching = communityState.fetching_in_status === "pending";
  const router = useRouter();
  const { query } = router.query;

  useEffect(() => {
    dispatch(getUserCommunities(userId));
  }, []);

  return (
    <FeedWrapper className="__c_page">
      <Header />
      {!query && <BelongTo isfetching={isfetching} />}
      <All />
    </FeedWrapper>
  );
};

export default Container;

const CommunityWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
