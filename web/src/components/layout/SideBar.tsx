import { NavLinksWrapper, SideBarContainer } from "@/styles/components/styled";
import { colors, getDevice } from "@/styles/global";
import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { sidenavlink } from "@/constants/nav";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
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
  /* border-right: 1px solid ${colors.primaryGray}; */
  height: 100%;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  z-index: 80;

  @media screen and (max-width: ${getDevice("lg")}) {
    width: 200px;
  }
`;
