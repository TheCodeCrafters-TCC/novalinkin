import { SkeletonImage } from "@/lib";
import {
  ExImage,
  ExImageContainer,
  StyledHeroBg,
  StyledHeroWrapper,
  StyledProfileImage,
} from "@/styles/components/styled";
import React, { useState } from "react";
import { ProfileProps } from "./Profile";
import { MdCamera } from "react-icons/md";
import { useAppSelector } from "@/hooks/state";
import { useProfileUpdateModal } from "@/context/useUpdateProfileModal";

const Hero: React.FC<ProfileProps> = ({ isfetching, user }) => {
  const [image, setImage] = useState("");
  const [exImage, setExImage] = useState(false);
  const auth = useAppSelector((state) => state.auth);
  const { onOpen } = useProfileUpdateModal();

  function viewImage() {
    setExImage(true);
    setImage(user?.userProfile);
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
          borderradius="9999px"
          style={styles.ImageStyles}
        />
      ) : (
        <div style={styles.container as any}>
          <StyledProfileImage
            src={user?.userProfile}
            width={110}
            height={110}
            alt="User"
            style={{ borderRadius: 9999 }}
            onClick={viewImage}
            priority
          />
          {user?._id === auth.userId && (
            <div
              style={styles.camera as any}
              onClick={onOpen}
              className="__camera_profile"
            >
              <MdCamera size={20} />
            </div>
          )}
          {exImage && (
            <ExImageContainer onClick={() => setExImage(false)}>
              <ExImage
                src={image}
                width={350}
                height={350}
                priority
                alt="User"
              />
            </ExImageContainer>
          )}
        </div>
      )}
    </StyledHeroWrapper>
  );
};

export default Hero;

const styles = {
  ImageStyles: {
    position: "absolute",
    marginLeft: "2rem",
    bottom: "-3rem",
  },
  camera: {
    position: "absolute",
    right: 0,
    background: "black",
    padding: "5px",
    borderRadius: "9999px",
    width: "35px",
    height: "35px",
    color: "white",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid white",
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "140px",
  },
};
