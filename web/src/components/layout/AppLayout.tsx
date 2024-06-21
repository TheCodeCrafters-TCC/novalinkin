import { StyledLayout } from "@/styles/components/styled";
import React from "react";
import StyledComponentsRegistry from "@/hooks/registry";
import { MainWrapper } from "@/styles/pages/styled";
import styled from "styled-components";
import { poppins } from "@/styles/global";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import NavBar from "./NavBar";
import MobileTab from "./MobileTab";
import MobileTabs from "./MobileTabs";

interface LayoutProps {
  children: React.ReactNode;
  isAppLoading: boolean;
}

const SideBar = dynamic(() => import("./SideBar"), { ssr: false });
const DynamicBar = dynamic(() => import("./DynamicBar"), { ssr: false });

const AppLayout: React.FC<LayoutProps> = ({ children, isAppLoading }) => {
  const path = useRouter();
  const hideNav = path.pathname.includes("auth") || isAppLoading;
  const router = useRouter();
  // const hideNavs = router.pathname.includes("auth");
  return (
    <StyledLayout>
      {isAppLoading ? "" : <NavBar />}
      <MainWrapper>
        {hideNav ? "" : <SideBar />}
        <MobileLayout>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </MobileLayout>
        {hideNav ? "" : <DynamicBar />}
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
