"use client";
import { DeviceType } from "@/types";
import { Inter, Poller_One, Poppins, Roboto } from "next/font/google";
import styled, { createGlobalStyle } from "styled-components";
const inter = Inter({ subsets: ["latin"] });
const interNormal = Inter({ subsets: ["latin"], weight: "400" });
const poppinsLight = Poppins({ subsets: ["latin"], weight: "300" });
const poppinsNormal = Poppins({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "500" });
const poppinsSemibold = Poppins({ subsets: ["latin"], weight: "600" });
const poppinsBold = Poppins({ subsets: ["latin"], weight: "700" });
const roboto = Roboto({ subsets: ["latin"], weight: "500" });
const pollerOne = Poller_One({ subsets: ["latin"], weight: "400" });

const colors = {
  primaryColor: "#1821F3",
  primaryRed: "#F61B1B",
  softGray: "#F5F5F5",
  primaryGray: "#D9D9D9",
  profileCoverBg: "#F5F5F5",
  mutedGray: "#636C76",
  darkCyan: "#005466",
  bgGray: "#F3F3F3",
  gold: "#FFD700",
  sliver: "#C0C0C0",
  bronze: "#CD7F32",
  fgBlack: "#1F2328",
  white: "#fff",
  black: "#000",
  neutral300: "rgb(212 212 212)",
  neutral400: "rgb(163 163 163)",
  neutral500: "rgb(115 115 115)",
  neutral600: "rgb(82 82 82)",
  neutral700: "rgb(64 64 64)",
  neutral800: "rgb(38 38 38)",
  slateGray: "#2F4F4F",
  darkGray: "#333333",
  charcoal: "#444444",
  lightGray: "#f0f0f0",
  ghostWhite: "#f8f8ff",
  whisper: "#e5e5e5",
  linear: "linear-gradient(to right, #1821F3, #0F0F0F)",
  sk_img_dark: "linear-gradient(90deg,#b0b0b0 0px,#d0d0d0 40px,#b0b0b0 80px)",
  sk_img_light: "linear-gradient(90deg,#e0e0e0 0px,#f5f5f5 40px,#e0e0e0 80px)",
  dark_sk_img: "#b0b0b0",
  light_sk_img: "#e0e0e0",
  red500: "rgb(239 68 68)",
  red600: "rgb(220 38 38)",
  star500: "#FFBC00",
  dropBg: "rgb(0,0,0,0.5)",
  green100: "rgb(220 252 231)",
  green200: "rgb(187 247 208)",
  green400: "rgb(74 222 128)",
  green500: "rgb(34 197 94)",
  green600: "rgb(22 163 74)",
};

export const IconWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const SpaceBetween = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const screens = {
  small: "320px",
  medium: "480px",
  large: "768px",
  mediumTablet: "850px",
  xxMedium: "960px",
  tablet: "1024px",
  xtraSmallDesktop: "1280px",
  smallDesktop: "1366px",
  mediumDesktop: "1440px",
  largeDesktop: "1600px",
  xtraLargeDesktop: "1680px",
  xtraXtraLarge: "1920px",
};
/**
 * Queries for device responsiveness
 * `lg` for devices like Galaxy Tab
 */
export const getDevice = (size: DeviceType) => {
  switch (size) {
    case "sm":
      return screens.small;
    case "md":
      return screens.medium;
    case "lg":
      return screens.large;
    case "mt":
      return screens.mediumTablet;
    case "xxm":
      return screens.xxMedium;
    case "xl":
      return screens.tablet;
    case "dxs":
      return screens.xtraSmallDesktop;
    case "dsm":
      return screens.smallDesktop;
    case "dmd":
      return screens.mediumDesktop;
    case "dlg":
      return screens.largeDesktop;
    case "dxl":
      return screens.xtraLargeDesktop;
    case "dxxl":
      return screens.xtraXtraLarge;
  }
};

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};

    .nav_bar{
      border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
    }
    .nav_bar_top{
      border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
      background: ${({ theme }) => theme.colors.background};
    }
    .nav_bot{
      border-top: 1px solid ${({ theme }) => theme.colors.nav};
    }
    .side_nav{
      border-right: 1px solid ${({ theme }) => theme.colors.nav};
    }
    .__dynamic_bar{
      border-left: 1px solid ${({ theme }) => theme.colors.nav};
    }
    .nav_link{
      /* background: ${({ theme }) => theme.colors.icon}; */
    }
    .__nav_unactive{
      &:hover{
        background: ${({ theme }) => theme.colors.icon};
      }
    }
    .__divider{
      width: auto;
      height: 1px;
      background: ${({ theme }) => theme.colors.nav};
    }
    .__timestamp{
      color: ${({ theme }) => theme.colors.timestamp}
    }
    .__a_menu{
      border: 1px solid ${({ theme }) => theme.colors.nav};
      background: ${({ theme }) => theme.colors.background};
    }
    
    .action-icons >svg {
        cursor: pointer;
        padding: 4px;
        border-radius: 6px;
        &:hover{
          background: ${({ theme }) => theme.colors.icon};
        }
      }
  }
  .__profile_page{
    @media screen and (max-width:${getDevice("md")}){
      margin-top: 3rem;
    }
  }
  .__articles_user{
    margin-top: 0;
  }

  .__tags_track::-webkit-scrollbar {
    display: none;
  
  }

  ::-webkit-scrollbar{
    /* background: ${colors.primaryGray}; */
    background: ${({ theme }) => theme.colors.nav};
    width: 10px;
  }
  ::-webkit-scrollbar-thumb{
    background: ${colors.primaryColor};
    border-radius: 6px;
    border: 2px solid ${({ theme }) => theme.colors.nav};
  }

  .__c_page{
    @media screen and (max-width:${getDevice("md")}){
      margin-top: 3.5rem;
    }
  }
  
  `;

function getTheme(systemTheme: string) {
  const defaultTheme = systemTheme === "dark" ? colors.black : colors.white;

  return defaultTheme;
}

export {
  colors,
  inter,
  poppins,
  roboto,
  GlobalStyle,
  getTheme,
  pollerOne,
  poppinsBold,
  poppinsLight,
  poppinsNormal,
  poppinsSemibold,
  interNormal,
};

export const lightTheme = {
  primary: colors.primaryColor,
  text: colors.black,
  background: colors.white,
  border: colors.neutral300,
  icon: colors.lightGray,
  nav: colors.neutral300,
  timestamp: colors.primaryGray,
  search: colors.softGray,
  info: colors.primaryGray,
  hero: colors.profileCoverBg,
  buffer_bg: colors.light_sk_img,
  buffer_img: colors.sk_img_light,
  bodyText: colors.primaryGray,
  dropBg: "rgba(255, 255, 255, 0.6)",
};
export const darkTheme = {
  primary: colors.primaryColor,
  text: colors.white,
  background: colors.black,
  border: colors.neutral700,
  icon: colors.darkGray,
  nav: colors.darkGray,
  timestamp: colors.neutral700,
  search: colors.darkGray,
  info: colors.neutral600,
  hero: colors.darkGray,
  buffer_bg: colors.dark_sk_img,
  buffer_img: colors.sk_img_dark,
  bodyText: colors.darkGray,
  dropBg: "rgb(0, 0, 0, 0.5)",
};

export const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DynamicWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 2rem;
  margin-bottom: 3.5rem;
`;

export const StyledBar = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: auto;
  gap: 1rem;
`;

export const StyledBarWrap = styled.div`
  width: auto;
  height: auto;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.search};
  overflow-y: auto;
`;
