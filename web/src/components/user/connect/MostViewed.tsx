import { StyledBar, StyledBarWrap, poppinsSemibold } from "@/styles/global";
import React from "react";
import styled from "styled-components";
import ConnectWithUser from "./ConnectWithUser";
import MostViewedUser from "./MostViewedUsers";

const MostViewed = () => {
  return (
    <StyledBar>
      <StyledConnect className={poppinsSemibold.className}>
        Most viewed
      </StyledConnect>
      <StyledBarWrap>
        <MostViewedUser />
      </StyledBarWrap>
    </StyledBar>
  );
};

export default MostViewed;

const StyledConnect = styled.h1`
  text-align: center;
  font-size: 20px;
`;
