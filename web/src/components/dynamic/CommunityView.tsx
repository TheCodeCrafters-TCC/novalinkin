import { useAppSelector } from "@/hooks/state";
import { DSearch } from "@/lib";
import { DynamicWrap } from "@/styles/global";
import React from "react";
import Rooms from "../community/Rooms";

const CommunityView = () => {
  const cQuery = useAppSelector((state) => state.system.query.communitySlug);
  return (
    <DynamicWrap>
      {/* <DSearch
        placeholder="Search Room"
        queryPage={`/community/${cQuery}/room`}
        isCommunityView
      /> */}
      <Rooms />
    </DynamicWrap>
  );
};

export default CommunityView;
