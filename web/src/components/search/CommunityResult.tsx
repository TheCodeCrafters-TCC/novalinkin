import React from "react";
import { SearchProps } from "./interface";
import { ResultContainer } from "@/styles/components/styled";
import { commdata } from "@/constants/community";
import C_ResultItem from "./C_ResultItem";
import { useAppSelector } from "@/hooks/state";
import { Empty } from "@/lib";

const CommunityResult: React.FC<SearchProps> = ({ searchQuery }) => {
  const communities = useAppSelector((state) => state.community.communities);
  const filterResult = communities.filter((cm) => {
    const name = cm.communityName.toLowerCase();
    const queried = searchQuery?.toLowerCase();
    return queried && name.includes(queried);
  });
  const notmatch = searchQuery && filterResult.length < 1;
  return (
    <ResultContainer>
      {notmatch ? (
        <Empty
          label={`No result match your input <strong>${searchQuery}</strong>`}
        />
      ) : (
        filterResult.map((cm, index) => (
          <C_ResultItem key={index} community={cm} />
        ))
      )}
    </ResultContainer>
  );
};

export default CommunityResult;
