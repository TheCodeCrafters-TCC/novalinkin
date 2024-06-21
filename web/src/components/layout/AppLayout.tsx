import { StyledLayout } from "@/styles/components/styled";
import React from "react";
import NavBar from "./NavBar";
import StyledComponentsRegistry from "@/hooks/registry";
import MobileTabs from "./MobileTabs";
import { MainWrapper } from "@/styles/pages/styled";
import styled from "styled-components";
import dynamic from "next/dynamic";

interface LayoutProps {
  children: React.ReactNode;
  isAppLoading: boolean;
}

const SideBar = dynamic(() => import("./SideBar"), { ssr: false });
const DynamicBar = dynamic(() => import("./DynamicBar"), { ssr: false });

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
