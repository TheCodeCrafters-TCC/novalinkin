import { FeedWrapper } from "@/styles/components/styled";
import React, { useEffect, useState } from "react";
import BelongTo from "./BelongTo";
import All from "./All";
import Header from "./Header";
import styled from "styled-components";
import { useRouter } from "next/router";
// import { Divider } from "@/lib";

const Container = () => {
  const [isfetching, setIsFetching] = useState(false);
  const router = useRouter();
  const { query } = router.query;

  // useEffect(() => {
  //   setIsFetching(true);
  //   setTimeout(() => {
  //     setIsFetching(false);
  //   }, 4000);
  // }, []);

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
