import { UProfile } from "@/assets";
import { ProfileProps } from "@/components/user/Profile";
import { SkeletonImage } from "@/lib";
import {
  StyledHeroWrapper,
  StyledHeroBg,
  StyledProfileImage,
} from "@/styles/components/styled";
import React from "react";

const Hero: React.FC<ProfileProps> = ({ isfetching }) => {
  return (
    <StyledHeroWrapper>
      {isfetching ? (
        <SkeletonImage height="280px" width="100%" borderradius="0" />
      ) : (
        <StyledHeroBg></StyledHeroBg>
      )}
      {isfetching ? (
        <SkeletonImage height="110px" width="110px" style={ImageStyles} />
      ) : (
        <StyledProfileImage src={UProfile} alt="User" priority />
      )}
    </StyledHeroWrapper>
  );
};

export default Hero;

const ImageStyles = {
  position: "absolute",
  marginLeft: "2rem",
  bottom: "-3rem",
};
