import { colors, poppins } from "@/styles/global";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import styled from "styled-components";
import Articles from "./other/Articles";
import Photos from "./other/Photos";
import Videos from "./other/Videos";

const Interactions = () => {
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
    <StyledInteract>
      <StyledIAction>
        <p
          className={poppins.className}
          onClick={handleSwicth}
          style={{ borderBottom: isArticleFocus, color: hasArtColor }}
        >
          Articles
        </p>
        <p
          className={poppins.className}
          onClick={handleSwicth}
          style={{ borderBottom: isPhotosFocus, color: hasPhColor }}
        >
          Photos
        </p>
        <p
          className={poppins.className}
          onClick={handleSwicth}
          style={{ borderBottom: isVideosFocus, color: hasVdColor }}
        >
          Videos
        </p>
      </StyledIAction>
      {articles && <Articles />}
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
