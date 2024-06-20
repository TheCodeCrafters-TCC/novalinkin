import { NavLinksWrapper, SideBarContainer } from "@/styles/components/styled";
import { colors, getDevice } from "@/styles/global";
import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { sidenavlink } from "@/constants/nav";
import { useRouter } from "next/navigation";
import { Button, NotIcon } from "@/lib";
import { TbScriptPlus } from "react-icons/tb";

const SideBar = () => {
  const router = useRouter();
  return (
    <SideBarContainer>
      <FixedNav className="side_nav">
        <NavLinksWrapper>
          {sidenavlink.map((nav, index) => (
            <div key={index}>
              {nav.hasIcon && <NotIcon label={3} varaint="secondary" />}
              <Nav
                url={nav.url}
                icon={nav.icon}
                label={nav.label}
                push={router.push}
                isProfile={nav.isProfile}
                key={index}
              />
            </div>
          ))}
          <Button
            label="Share article"
            variant="primary"
            radius="sm"
            width="auto"
            className="__share_btn"
          />
          <TbScriptPlus
            className="_mobile_share_article __nav_unactive"
            size={30}
          />
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

  .__share_btn {
    margin-top: auto;
    margin-bottom: 6rem;
  }

  @media screen and (max-width: ${getDevice("dxxl")}) {
    width: 400px;
  }
  @media screen and (max-width: ${getDevice("dxl")}) {
    width: 390px;
  }
  @media screen and (max-width: ${getDevice("dlg")}) {
    width: 370px;
  }
  @media screen and (max-width: ${getDevice("dmd")}) {
    width: 350px;
  }
  @media screen and (max-width: ${getDevice("dsm")}) {
    width: 350px;
  }
  @media screen and (max-width: ${getDevice("dxs")}) {
    width: 338px;

    .__share_btn {
      margin-bottom: 4rem;
    }
  }
  @media screen and (max-width: ${getDevice("xl")}) {
    width: 100px;
  }

  @media screen and (max-width: ${getDevice("tab")}) {
    width: 69px;
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    width: 70px;
  }
`;
