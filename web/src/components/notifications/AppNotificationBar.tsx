import { StyledBar, poppinsSemibold, StyledBarWrap } from "@/styles/global";
import React from "react";
import styled from "styled-components";
import ConnectWithUser from "../user/connect/ConnectWithUser";
import In_App from "./In_App";

const AppNotificationBar = () => {
  return (
    <StyledBar>
      <StyledConnect className={poppinsSemibold.className}>
        App Notification
      </StyledConnect>
      <StyledBarWrap>
        <In_App />
      </StyledBarWrap>
    </StyledBar>
  );
};

export default AppNotificationBar;

const StyledConnect = styled.h1`
  text-align: center;
  font-size: 20px;
`;
