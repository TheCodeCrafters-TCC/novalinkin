import { DynaBarContainer } from "@/styles/components/styled";
import { colors, getDevice } from "@/styles/global";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Home = dynamic(() => import("../dynamic/Home"), { ssr: false });
const Chats = dynamic(() => import("../dynamic/Chats"), { ssr: false });
const Community = dynamic(() => import("../dynamic/Community"), { ssr: false });
const Notifications = dynamic(() => import("../dynamic/Notification"), {
  ssr: false,
});
const Explore = dynamic(() => import("../dynamic/Explore"), { ssr: false });
const Profile = dynamic(() => import("../dynamic/Profile"), { ssr: false });

const getCurrentBar = (path: any) => {
  if (path.pathname === "/") {
    return <Home />;
  } else if (path.pathname?.includes("chats")) {
    return <Chats />;
  } else if (path.pathname === "/community") {
    return <Community />;
  } else if (path.pathname === "/notifications") {
    return <Notifications />;
  } else if (path.pathname === "/explore") {
    return <Explore />;
  } else if (path.pathname.includes("profile")) {
    return <Profile />;
  } else {
    return <Home />;
  }
};

const DynamicBar = () => {
  const path = useRouter();
  return (
    <DynaBarContainer>
      <FixedNav className="__dynamic_bar">{getCurrentBar(path)}</FixedNav>
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
