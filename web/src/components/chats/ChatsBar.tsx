import { StyledBar, poppinsSemibold, StyledBarWrap } from "@/styles/global";
import React from "react";
import styled from "styled-components";
import ConnectWithUser from "../user/connect/ConnectWithUser";
import OnlineUsers from "./OnlineUsers";

const ChatsBar = () => {
  return (
    <StyledBar>
      <StyledConnect className={poppinsSemibold.className}>
        Online
      </StyledConnect>
      <StyledBarWrap>
        <OnlineUsers />
      </StyledBarWrap>
    </StyledBar>
  );
};

export default ChatsBar;
const StyledConnect = styled.h1`
  text-align: center;
  font-size: 20px;
`;
