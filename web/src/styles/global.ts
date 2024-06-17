import { Inter, Poppins, Roboto } from "next/font/google";
import { createGlobalStyle } from "styled-components";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "500" });
const roboto = Roboto({ subsets: ["latin"], weight: "500" });

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: ${(props) => props.theme.bg}
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
};

export { colors, inter, poppins, roboto, GlobalStyle };
