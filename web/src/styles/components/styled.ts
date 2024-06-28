"use client";

import styled from "styled-components";
import { colors, getDevice, poppins, screens } from "../global";
import Image from "next/image";

export const StyledLayout = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledNav = styled.nav`
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors?.background};
  /* border-bottom: 1px solid ${colors.neutral300}; */
  padding: 2rem;
  justify-content: space-between;
  z-index: 100;

  @media screen and (max-width: ${getDevice("md")}) {
    display: none;
  }
`;

export const StyledLogoWrap = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const LogoWrap = styled(Image)`
  width: 60px;
  height: 60px;
`;

export const StyledLogoText = styled.h1`
  color: ${colors.primaryColor};
  font-size: 18px;
  transform: translateX(-16px);
`;

export const ActionBarWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const AuthInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 400px;

  h1 {
    font-size: 25px;
    font-weight: 600;
  }
  span {
    color: ${colors.primaryColor};
  }
  .info-tag {
    font-size: 14px;
    color: #413b3b;
  }

  @media screen and (max-width: ${getDevice("md")}) {
    width: 300px;
    justify-content: center;

    h1 {
      font-size: 22px;
      transform: translateY(-7px);
    }
    .info-tag {
      transform: translateY(-18px);
    }
  }
`;

export const AuthInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* width: 300px; */
`;

export const AuthCofirmWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  position: absolute;
  bottom: 0;

  p {
    font-size: 14px;
  }
  span {
    color: ${colors.primaryColor};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    cursor: pointer;
  }

  @media screen and (max-width: ${getDevice("md")}) {
    display: none;
  }
`;

export const MobileAuthCofirmWrap = styled.div`
  display: none;
  align-items: center;
  gap: 2px;
  position: absolute;
  bottom: 0;

  p {
    font-size: 12px;
    text-align: center;
  }
  span {
    color: ${colors.primaryColor};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: ${getDevice("md")}) {
    display: flex;
  }
`;

export const StyledLoader = styled.div`
  display: flex;
  width: 100%;
  height: 85vh;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoaderImage = styled(Image)`
  height: 200px;
  width: 200px;
`;

export const TaskText = styled.p`
  font-size: 14px;
  position: absolute;
  bottom: 2rem;
`;

export const StyledMobileTabs = styled.nav`
  display: none;
  background: ${({ theme }) => theme.colors.background};

  @media screen and (max-width: ${getDevice("md")}) {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto;
    padding: 10px;
    justify-content: space-between;
    padding-left: 26px;
    padding-right: 28px;
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
    z-index: 90;
  }
`;

export const StyledTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  p {
    font-size: 13px;
  }
`;

export const StyledHeaderNav = styled.div`
  display: none;

  @media screen and (max-width: ${getDevice("md")}) {
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    height: auto;
    background: ${({ theme }) => theme.colors.background};
    border-bottom: 1px solid ${colors.softGray};
    justify-content: space-between;
    padding: 8px;
    align-items: center;
    padding-right: 1.2rem;
    padding-left: 1.2rem;
    z-index: 90;
  }
`;

export const StyledInfoPage_ = styled.div`
  display: flex;
  position: relative;
  top: 0;
  width: 100%;
  height: 45px;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
  padding: 8px;
  padding-right: 1.2rem;
  padding-left: 1.2rem;

  svg {
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.icon};
    }
  }

  @media screen and (max-width: ${getDevice("md")}) {
    display: none;
  }
`;

export const HImage = styled(Image)`
  width: 45px;
  height: 45px;
`;

export const StyledActionHeader = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const HeaderInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  p {
    font-size: 18px;
  }
`;

export const SideBarContainer = styled.div`
  width: 625px;
  position: relative;
  /* background: red; */

  @media screen and (max-width: ${getDevice("dxxl")}) {
    width: 1150px;
  }
  @media screen and (max-width: ${getDevice("dxl")}) {
    width: 1000px;
  }
  @media screen and (max-width: ${getDevice("dlg")}) {
    width: 900px;
  }
  @media screen and (max-width: ${getDevice("dmd")}) {
    width: 780px;
  }
  @media screen and (max-width: ${getDevice("dsm")}) {
    width: 700px;
  }
  @media screen and (max-width: ${getDevice("dxs")}) {
    width: 625px;
  }
  @media screen and (max-width: ${getDevice("xl")}) {
    width: 143px;
  }
  @media screen and (max-width: ${getDevice("mt")}) {
    width: 190px;
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    width: 190px;
  }
  @media screen and (max-width: ${getDevice("md")}) {
    display: none;
  }
`;
export const DynaBarContainer = styled.div`
  background: red;
  width: 460px;
  position: relative;

  @media screen and (max-width: ${getDevice("mt")}) {
    display: none;
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    width: 390px;
    display: none;
  }
  @media screen and (max-width: ${getDevice("tab")}) {
    display: none;
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    display: none;
  }
  @media screen and (max-width: ${getDevice("md")}) {
    display: none;
  }
`;

export const FeedWrapper = styled.div`
  width: 550px;
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${getDevice("dxxl")}) {
    width: 650px;
    border-left: 1px solid ${({ theme }) => theme.colors.nav};
    border-right: 1px solid ${({ theme }) => theme.colors.nav};
  }
  @media screen and (max-width: ${getDevice("dxl")}) {
    width: 550px;
  }
  @media screen and (max-width: ${getDevice("xl")}) {
    width: 550px;
    border-left: 0;
    border-right: 0;
  }
  @media screen and (max-width: ${getDevice("xxm")}) {
    width: 480px;
  }
  @media screen and (max-width: ${getDevice("mt")}) {
    /* width: 480px; */
    border-left: 1px solid ${({ theme }) => theme.colors.nav};
    border-right: 1px solid ${({ theme }) => theme.colors.nav};
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    width: 480px;
    border-left: 1px solid ${({ theme }) => theme.colors.nav};
    border-right: 1px solid ${({ theme }) => theme.colors.nav};
  }
  @media screen and (max-width: ${getDevice("md")}) {
    width: 100%;
    margin-top: 4.3rem;
    margin-bottom: 5rem;
    border-left: 0;
    border-right: 0;
  }
`;

export const NavLinksWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  transform: translateX(-3rem);
  margin-top: 1rem;

  @media screen and (max-width: ${getDevice("dxs")}) {
    margin-top: 0;
  }
  @media screen and (max-width: ${getDevice("xl")}) {
    transform: translate(-0.5rem);
  }
`;

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 40px;
  gap: 1rem;
  padding: 9px;
  border-radius: 7px;

  &:hover {
    cursor: pointer;
  }

  .dot {
    background: ${colors.primaryColor};
    width: 10px;
    height: 10px;
    border-radius: 5px;
    transform: translateY(-8px);
    position: absolute;
    right: 5px;
  }

  @media screen and (max-width: ${getDevice("xl")}) {
    p {
      display: none;
    }
  }
`;

export const StyledAMenu = styled.div`
  width: 300px;
  height: auto;
  position: absolute;
  transform: translateY(9rem);
  right: 17px;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  z-index: 200;

  @media screen and (max-width: ${getDevice("md")}) {
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 200;
    right: 0;
    left: -1px;
    transform: translateY(0);
    border-radius: 0;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
  }
`;

export const AMenuItems = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.8rem;
  gap: 10px;
  border-radius: 14px;

  @media screen and (max-width: ${getDevice("md")}) {
    padding: 1.5rem;
  }
`;

export const StyledHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const StyledHeroBg = styled.div`
  width: 100%;
  height: 280px;
  background: ${({ theme }) => theme.colors.hero};
`;

export const StyledProfileImage = styled(Image)`
  width: 110px;
  height: 110px;
  /* transform: translateY(-3.5rem); */
  margin-left: 2rem;
  position: absolute;
  bottom: -3rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 26px;
  justify-content: center;
  margin-top: 3rem;
  gap: 1rem;

  h1 {
    font-size: 23px;
  }
  .__desc_tag {
    font-size: 13px;
    /* width: 550px; */
  }

  @media screen and (max-width: ${getDevice("md")}) {
    width: 100%;
    padding: 16px;
  }
`;

export const InfoFlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InfoIconsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.info};
  flex-wrap: wrap;
  user-select: none;

  .__link {
    cursor: pointer;
  }
`;

export const InFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const InfoTag = styled.p`
  font-size: 12px;
`;

export const StyledConnectWrap = styled.div`
  padding: 2rem;
  gap: 1.5rem;
  flex-direction: column;
  display: flex;

  @media screen and (max-width: ${getDevice("md")}) {
    padding: 1rem;
  }
`;

export const StyledConnectUser = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;
export const ConnectUserImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const ConnectUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;

  /* span {
    font-size: 15px;
  } */
`;

export const BelongedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav};

  svg {
    cursor: pointer;
    border-radius: 4px;
    padding: 8px;

    &:hover {
      background: ${({ theme }) => theme.colors.icon};
    }
  }

  @media screen and (max-width: ${getDevice("md")}) {
    padding: 1rem;
  }
`;

export const BelongedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.search};
  border-radius: 10px;
  padding: 10px;
  height: auto;
  width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InCommunityImage = styled(Image)`
  width: 100px;
  height: 100px;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${getDevice("md")}) {
    width: 80px;
    height: 80px;
  }
`;

export const AllCommunityContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
  gap: 2rem;
  flex-direction: column;

  @media screen and (max-width: ${getDevice("md")}) {
    padding: 1rem;
  }
`;

export const AllCommunityWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: center;
  cursor: pointer;
`;

export const CommDetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  .__comm_desc {
    font-size: 13px;
  }

  @media screen and (max-width: ${getDevice("md")}) {
    gap: 0;
  }
`;

export const CommInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CommImage = styled(Image)`
  width: 100px;
  height: 100px;

  @media screen and (max-width: ${getDevice("md")}) {
    width: 80px;
    height: 80px;
  }
`;

export const StyledMSB = styled.div`
  background: ${({ theme }) => theme.colors.background};
  position: fixed;
  height: 100%;
  width: 260px;
  border-right: 1px solid ${({ theme }) => theme.colors.nav};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 250;
  bottom: 0;
  left: 0;
  top: 0;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
  gap: 11px;
  user-select: none;
`;

export const HeaderUserImage = styled(Image)`
  width: 70px;
  height: 70px;
`;

export const UserName = styled.p`
  font-size: 18px;
`;

export const StyledLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 16px;
  width: 100%;
`;

export const LinkWrap = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 10px;
  width: 100%;
  user-select: none;

  p {
    font-size: 17px;
  }
`;

export const ContentWrapper = styled.div`
  width: 550px;
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${getDevice("dxxl")}) {
    width: 650px;
    border-left: 1px solid ${({ theme }) => theme.colors.nav};
    border-right: 1px solid ${({ theme }) => theme.colors.nav};
  }
  @media screen and (max-width: ${getDevice("dxl")}) {
    width: 550px;
  }
  @media screen and (max-width: ${getDevice("xl")}) {
    width: 550px;
    border-left: 0;
    border-right: 0;
  }
  @media screen and (max-width: ${getDevice("xxm")}) {
    width: 480px;
  }
  @media screen and (max-width: ${getDevice("mt")}) {
    /* width: 480px; */
    border-left: 1px solid ${({ theme }) => theme.colors.nav};
    border-right: 1px solid ${({ theme }) => theme.colors.nav};
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    width: 480px;
    border-left: 1px solid ${({ theme }) => theme.colors.nav};
    border-right: 1px solid ${({ theme }) => theme.colors.nav};
  }
  @media screen and (max-width: ${getDevice("md")}) {
    width: 100%;
    /* margin-top: 1rem; */
    margin-bottom: 5rem;
    border-left: 0;
    border-right: 0;
  }
`;

export const MobileSearchWrap = styled.div`
  width: 85%;
  height: 50px;
  border-radius: 10px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.search};
  color: ${colors.primaryGray};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const N_Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    transform: translateX(-5px);
  }
`;

export const N_Image = styled(Image)`
  width: 55px;
  height: 55px;
  border-radius: 30px;
`;

export const Styled_Share = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  width: 100%;
  position: relative;

  h1 {
    font-size: 19px;
  }

  button {
    /* position: absolute;
    bottom: 2rem; */
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    &:hover {
      background: ${({ theme }) => theme.colors.icon};
    }
  }
`;

export const StyledShareTA = styled.textarea`
  width: 100%;
  height: auto;
  padding: 2rem;
  border-radius: 9px;
  height: 200px;
`;

export const StyledIconWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 5px;
`;

export const SelectedImage = styled(Image)`
  width: 105px;
  height: 95px;
  border-radius: 10px;
`;

export const StyledImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  svg {
    padding: 5px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 4px;
    background: ${({ theme }) => theme.colors.icon};
    position: absolute;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }

  @media screen and (max-width: ${getDevice("xl")}) {
    p {
      transform: translateY(2rem) translateX(2rem);
    }
  }
`;

export const Styled_Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.5);
  z-index: 500;
`;

export const StyledShareContainer = styled.div`
  width: 45%;
  background: ${({ theme }) => theme.colors.background};
  height: auto;
  border-radius: 11px;
  gap: 10px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${getDevice("xl")}) {
    width: 65%;
  }
  @media screen and (max-width: ${getDevice("md")}) {
    width: 95%;
  }
`;

export const ContentHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 20px;
  }

  svg {
    padding: 5px;
    border-radius: 4px;
    &:hover {
      background: ${({ theme }) => theme.colors.icon};
      cursor: pointer;
    }
  }
`;

export const ActionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const ActionInput = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 1rem;
  border-radius: 11px;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.search};
`;

export const IconsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  svg {
    color: rgb(59 130 246);
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ITWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
`;
