"use client";
import { Inter, Poller_One, Poppins, Roboto } from "next/font/google";
import { createGlobalStyle } from "styled-components";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "500" });
const roboto = Roboto({ subsets: ["latin"], weight: "500" });
const pollerOne = Poller_One({ subsets: ["latin"], weight: "400" });

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: ${({ theme }) => theme.color.background}
}
`;

const colors = {
  primaryColor: "#1821F3",
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
};

function getTheme(systemTheme: string) {
  const defaultTheme = systemTheme === "dark" ? colors.black : colors.white;

  return defaultTheme;
}

export { colors, inter, poppins, roboto, GlobalStyle, getTheme, pollerOne };

export const lightTheme = {
  primary: colors.primaryColor,
  text: colors.black,
  background: colors.white,
  border: colors.neutral300,
};
export const darkTheme = {
  primary: colors.primaryColor,
  text: colors.white,
  background: colors.black,
  border: colors.neutral700,
};
