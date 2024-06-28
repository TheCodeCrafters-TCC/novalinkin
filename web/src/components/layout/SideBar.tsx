import { NavLinksWrapper, SideBarContainer } from "@/styles/components/styled";
import { colors, getDevice } from "@/styles/global";
import React, { useEffect } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { sidenavlink } from "@/constants/nav";
import { useRouter } from "next/navigation";
import { Button, NotIcon } from "@/lib";
import { TbScriptPlus } from "react-icons/tb";
import { useArticleModal } from "@/context/useArticlesModal";

const SideBar = () => {
  const router = useRouter();
  const { onOpen } = useArticleModal();

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
          <Button
            label="Share article"
            variant="primary"
            radius="sm"
            width="100%"
            className="__share_btn"
            onActionClick={onOpen}
          />
          <TbScriptPlus
            className="_mobile_share_article __nav_unactive"
            size={35}
            onClick={onOpen}
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
    position: absolute;
    bottom: 4.5rem;
  }

  @media screen and (max-width: ${getDevice("dxxl")}) {
    width: 450px;

    ._mobile_share_article {
      display: none;
    }
  }
  @media screen and (max-width: ${getDevice("dxl")}) {
    width: 410px;
  }
  @media screen and (max-width: ${getDevice("dlg")}) {
    width: 380px;
  }
  @media screen and (max-width: ${getDevice("dxs")}) {
    width: 338px;
    margin-top: -0.4rem;

    .__share_btn {
      bottom: 2.8rem;
    }
  }
  @media screen and (max-width: ${getDevice("xl")}) {
    width: 90px;

    .__share_btn {
      display: none;
    }
    ._mobile_share_article {
      display: block;
      padding: 5px;
      border-radius: 7px;
      cursor: pointer;
    }
  }
`;
