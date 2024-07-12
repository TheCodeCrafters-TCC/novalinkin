import { LogoImg } from "@/assets";
import {
  LogoWrap,
  StyledLogoText,
  StyledLogoWrap,
} from "@/styles/components/styled";
import { pollerOne } from "@/styles/global";
import React from "react";

const Logo = () => {
  return (
    <StyledLogoWrap href="/">
      <LogoWrap priority src={LogoImg} alt="Logo" />
    </StyledLogoWrap>
  );
};

export default Logo;
