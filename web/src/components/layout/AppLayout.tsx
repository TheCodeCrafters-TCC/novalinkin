import { StyledLayout } from "@/styles/components/styled";
import React from "react";
import StyledComponentsRegistry from "@/hooks/registry";
import { MainWrapper } from "@/styles/pages/styled";
import styled from "styled-components";
import { poppins } from "@/styles/global";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { NoSSRDyn } from "..";

const DynNavbar = dynamic(() => import("./NavBar"), { ssr: false });
const DynSideBar = dynamic(() => import("./SideBar"), { ssr: false });
const DynTab = dynamic(() => import("./MobileTabs"), { ssr: false });

interface LayoutProps {
  children: React.ReactNode;
  isAppLoading: boolean;
}

const AppLayout: React.FC<LayoutProps> = ({ children, isAppLoading }) => {
  const path = useRouter();
  const hideNav = path.pathname.includes("auth") || isAppLoading;
  return (
    <StyledLayout>
      {isAppLoading ? "" : <DynNavbar />}
      <MainWrapper>
        {hideNav ? "" : <DynSideBar />}
        <MobileLayout>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </MobileLayout>
        {hideNav ? "" : <NoSSRDyn />}
      </MainWrapper>
      <DynTab />
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
