import { DynaBarContainer } from "@/styles/components/styled";
import { colors, getDevice } from "@/styles/global";
import React from "react";
import styled from "styled-components";

const DynamicBar = () => {
  return (
    <DynaBarContainer>
      <FixedNav className="__dynamic_bar">DynamicBar</FixedNav>
    </DynaBarContainer>
  );
};

export default DynamicBar;
const FixedNav = styled.nav`
  position: fixed;
  width: 390px;
  background: ${({ theme }) => theme.colors.background};
  border-left: 1px solid ${colors.primaryGray};
  height: 100%;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${getDevice("dxxl")}) {
    width: 485px;
  }
  @media screen and (max-width: ${getDevice("dxl")}) {
    width: 465px;
  }
  @media screen and (max-width: ${getDevice("dlg")}) {
    width: 430px;
  }
  @media screen and (max-width: ${getDevice("dxs")}) {
    width: 390px;
  }
  @media screen and (max-width: ${getDevice("xl")}) {
    width: 375px;
  }
  @media screen and (max-width: ${getDevice("xxm")}) {
    width: 380px;
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    width: 200px;
  }
`;
