import { StyledBar, poppinsSemibold, StyledBarWrap } from "@/styles/global";
import React from "react";
import styled from "styled-components";
import TopCommunities from "./TopCommunities";
import Room_Content from "./Room_Content";

const Rooms = () => {
  return (
    <StyledBar>
      <StyledConnect className={poppinsSemibold.className}>Rooms</StyledConnect>
      <StyledBarWrap>
        <Room_Content />
      </StyledBarWrap>
    </StyledBar>
  );
};

export default Rooms;

const StyledConnect = styled.h1`
  text-align: center;
  font-size: 20px;
`;
