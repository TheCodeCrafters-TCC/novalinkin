import { DSearch } from "@/lib";
import { DynamicWrap } from "@/styles/global";
import React from "react";
import TopCommunity from "../community/TopCommunity";

const Community = () => {
  return (
    <DynamicWrap>
      <DSearch
        placeholder="Search Community"
        queryPage="community"
        isCommunity
      />
      <TopCommunity />
    </DynamicWrap>
  );
};

export default Community;
