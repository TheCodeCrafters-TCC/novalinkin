import { UProfile } from "@/assets";
import {
  StyledHeroBg,
  StyledHeroWrapper,
  StyledProfileImage,
} from "@/styles/components/styled";
import React from "react";

const Hero = () => {
  return (
    <StyledHeroWrapper>
      <StyledHeroBg></StyledHeroBg>
      <StyledProfileImage src={UProfile} alt="User" priority />
    </StyledHeroWrapper>
  );
};

export default Hero;
