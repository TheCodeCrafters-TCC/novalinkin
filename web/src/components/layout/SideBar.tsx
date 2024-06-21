import { NavLinksWrapper, SideBarContainer } from "@/styles/components/styled";
import { colors, getDevice } from "@/styles/global";
import React, { useEffect } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { sidenavlink } from "@/constants/nav";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();

  // useEffect(() => {
  //   let screenWidth = window.screen.width;
  //   alert("Screen Width: " + screenWidth);
  // }, []);

  return (
    <SideBarContainer>
      <FixedNav className="side_nav">
        <NavLinksWrapper>
          {sidenavlink.map((nav, index) => (
            <Nav
              url={nav.url}
              icon={nav.icon}
              label={nav.label}
              push={router.push}
              isProfile={nav.isProfile}
              hasicon={nav.hasIcon}
              iconVariant={nav.iconVariant}
              totalNot={nav.totalNot}
              key={index}
            />
          ))}
        </NavLinksWrapper>
      </FixedNav>
    </SideBarContainer>
  );
};

export default SideBar;

const FixedNav = styled.nav`
  position: fixed;
  width: 338px;
  background: ${({ theme }) => theme.colors.background};
  height: 100%;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  z-index: 80;

  @media screen and (max-width: ${getDevice("dxxl")}) {
    width: 450px;
  }
  @media screen and (max-width: ${getDevice("dxl")}) {
    width: 410px;
  }
  @media screen and (max-width: ${getDevice("dlg")}) {
    width: 380px;
  }
  @media screen and (max-width: ${getDevice("dxs")}) {
    width: 338px;
  }
  @media screen and (max-width: ${getDevice("xl")}) {
    width: 90px;
  }
`;
