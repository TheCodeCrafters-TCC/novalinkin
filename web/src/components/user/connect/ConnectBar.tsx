import { StyledBar, StyledBarWrap, poppinsSemibold } from "@/styles/global";
import React from "react";
import styled from "styled-components";
import ConnectWithUser from "./ConnectWithUser";

const ConnectBar = () => {
  return (
    <StyledBar>
      <StyledConnect className={poppinsSemibold.className}>
        Connect with
      </StyledConnect>
      <StyledBarWrap>
        <ConnectWithUser pushPath="/connect" />
      </StyledBarWrap>
    </StyledBar>
  );
};

export default ConnectBar;

const StyledConnect = styled.h1`
  text-align: center;
  font-size: 20px;
`;
