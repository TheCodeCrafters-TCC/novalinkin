import { poppinsSemibold } from "@/styles/global";
import React from "react";
import styled from "styled-components";

const ConnectBar = () => {
  return (
    <StyledBar>
      <StyledConnect className={poppinsSemibold.className}>
        Connect with
      </StyledConnect>
      <StyledConnectWrap></StyledConnectWrap>
    </StyledBar>
  );
};

export default ConnectBar;

const StyledBar = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: auto;
  gap: 1rem;
`;

const StyledConnect = styled.h1`
  text-align: center;
  font-size: 20px;
`;

const StyledConnectWrap = styled.div`
  width: auto;
  height: 350px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.search};
`;
