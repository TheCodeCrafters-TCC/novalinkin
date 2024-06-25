import { colors, poppins } from "@/styles/global";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import styled from "styled-components";
import Articles from "./other/Articles";
import Photos from "./other/Photos";
import Videos from "./other/Videos";
import { ProfileProps } from "./Profile";
import { FilterSwitch } from "@/lib";

const Interactions: React.FC<ProfileProps> = ({ isfetching }) => {
  const [articles, setArticles] = useState(true);
  const [photos, setPhotos] = useState(false);
  const [videos, setVideos] = useState(false);
  const isArticleFocus = (articles && `4px solid ${colors.primaryColor}`) || "";
  const isPhotosFocus = (photos && `4px solid ${colors.primaryColor}`) || "";
  const isVideosFocus = (videos && `4px solid ${colors.primaryColor}`) || "";
  const hasArtColor = (articles && colors.primaryColor) || "";
  const hasPhColor = (photos && colors.primaryColor) || "";
  const hasVdColor = (videos && colors.primaryColor) || "";

  function handleSwicth(e: React.MouseEvent<HTMLParagraphElement>) {
    const element = e.currentTarget.textContent;
    if (element === "Articles") {
      setArticles(true);
      setPhotos(false);
      setVideos(false);
    } else if (element === "Photos") {
      setArticles(false);
      setVideos(false);
      setPhotos(true);
    } else if (element === "Videos") {
      setPhotos(false);
      setArticles(false);
      setVideos(true);
    }
  }
  return (
    <StyledInteract className={poppins.className}>
      <StyledIAction>
        <FilterSwitch
          isfetching={isfetching}
          label="Articles"
          className={poppins.className}
          onActionClick={handleSwicth}
          style={{ borderBottom: isArticleFocus, color: hasArtColor }}
        />
        <FilterSwitch
          isfetching={isfetching}
          label="Photos"
          className={poppins.className}
          onActionClick={handleSwicth}
          style={{ borderBottom: isPhotosFocus, color: hasPhColor }}
        />
        <FilterSwitch
          isfetching={isfetching}
          label="Videos"
          className={poppins.className}
          onActionClick={handleSwicth}
          style={{ borderBottom: isVideosFocus, color: hasVdColor }}
        />
      </StyledIAction>
      {articles && <Articles isfetching={isfetching} />}
      {photos && <Photos />}
      {videos && <Videos />}
    </StyledInteract>
  );
};

export default Interactions;

const StyledInteract = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  gap: 10px;
`;

const StyledIAction = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
  width: 100%;

  p {
    padding: 16px;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
`;
