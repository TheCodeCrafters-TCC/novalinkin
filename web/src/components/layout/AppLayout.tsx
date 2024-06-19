import { StyledLayout } from "@/styles/components/styled";
import React from "react";
import NavBar from "./NavBar";
import StyledComponentsRegistry from "@/hooks/registry";
import MobileTabs from "./MobileTabs";
import { MainWrapper } from "@/styles/pages/styled";
import SideBar from "./SideBar";
import DynamicBar from "./DynamicBar";
import styled from "styled-components";
import { poppins } from "@/styles/global";

interface LayoutProps {
  children: React.ReactNode;
  isAppLoading: boolean;
}

const AppLayout: React.FC<LayoutProps> = ({ children, isAppLoading }) => {
  return (
    <StyledLayout>
      {isAppLoading ? "" : <NavBar />}
      <MainWrapper>
        <SideBar />
        <MobileLayout>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </MobileLayout>
        <DynamicBar />
      </MainWrapper>
      <MobileTabs />
    </StyledLayout>
  );
};

export default AppLayout;

const MobileLayout = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  /* justify-content: center; */
  /* align-items: center; */
`;
