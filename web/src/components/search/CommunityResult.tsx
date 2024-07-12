import React from "react";
import { SearchProps } from "./interface";
import { ResultContainer } from "@/styles/components/styled";
import { commdata } from "@/constants/community";
import C_ResultItem from "./C_ResultItem";
import { useAppSelector } from "@/hooks/state";

const CommunityResult: React.FC<SearchProps> = ({ searchQuery }) => {
  const communities = useAppSelector((state) => state.community.communities);
  const filterResult = communities.filter((cm) => {
    const name = cm.communityName.toLowerCase();
    const queried = searchQuery?.toLowerCase();
    return queried && name.includes(queried);
  });
  return (
    <ResultContainer>
      {filterResult.map((cm, index) => (
        <C_ResultItem key={index} community={cm} />
      ))}
    </ResultContainer>
  );
};

export default CommunityResult;
