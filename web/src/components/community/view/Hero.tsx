import { UProfile } from "@/assets";
import { ProfileProps } from "@/components/user/Profile";
import { SkeletonImage } from "@/lib";
import {
  StyledHeroWrapper,
  StyledHeroBg,
  StyledProfileImage,
  ExImageContainer,
  StyledCommunityExImage,
} from "@/styles/components/styled";
import React, { useState } from "react";
import { CommunityInterface } from "./Profile";

const Hero: React.FC<CommunityInterface> = ({ isfetching, community }) => {
  const [image, setImage] = useState("");
  const [exImage, setExImage] = useState(false);

  function viewImage() {
    setExImage(true);
    setImage(community?.communityProfile?.url);
  }

  return (
    <StyledHeroWrapper>
      {isfetching ? (
        <SkeletonImage height="280px" width="100%" borderradius="0" />
      ) : (
        <StyledHeroBg></StyledHeroBg>
      )}
      {isfetching ? (
        <SkeletonImage
          height="110px"
          width="110px"
          borderradius="9px"
          style={ImageStyles}
        />
      ) : (
        <>
          <StyledProfileImage
            src={community.communityProfile?.url}
            onClick={viewImage}
            style={{ borderRadius: 9 }}
            width={110}
            height={110}
            alt="Community"
            priority
          />
          {exImage && (
            <ExImageContainer onClick={() => setExImage(false)}>
              <StyledCommunityExImage
                src={image}
                width={350}
                height={350}
                priority
                alt="User"
              />
            </ExImageContainer>
          )}
        </>
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
