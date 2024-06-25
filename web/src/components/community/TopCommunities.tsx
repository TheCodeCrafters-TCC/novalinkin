import { topcomms } from "@/constants/community";
import React from "react";
import styled from "styled-components";
import TopCM from "./TopCM";

const TopCommunities = () => {
  return (
    <StyledConnect>
      {topcomms.map((cm, index) => (
        <TopCM community={cm} key={index} />
      ))}
    </StyledConnect>
  );
};

export default TopCommunities;

const StyledConnect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
`;
