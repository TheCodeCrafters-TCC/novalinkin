import React from "react";
import { SearchProps } from "./interface";
import { ResultContainer } from "@/styles/components/styled";
import { commdata } from "@/constants/community";
import C_ResultItem from "./C_ResultItem";

const CommunityResult: React.FC<SearchProps> = ({ searchQuery }) => {
  const filterResult = commdata.filter((cm) => {
    const name = cm.name.toLowerCase();
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
