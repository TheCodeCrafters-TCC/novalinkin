import { StyledBar, poppinsSemibold, StyledBarWrap } from "@/styles/global";
import React from "react";
import styled from "styled-components";
import TopCommunities from "./TopCommunities";

const TopCommunity = () => {
  return (
    <StyledBar>
      <StyledConnect className={poppinsSemibold.className}>
        Top Communities
      </StyledConnect>
      <StyledBarWrap>
        <TopCommunities />
      </StyledBarWrap>
    </StyledBar>
  );
};

export default TopCommunity;

const StyledConnect = styled.h1`
  text-align: center;
  font-size: 20px;
`;
