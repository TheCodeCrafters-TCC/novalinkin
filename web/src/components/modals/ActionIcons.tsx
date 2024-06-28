import { Title } from "@/lib";
import { IconsWrap, ITWrap } from "@/styles/components/styled";
import React, { useState } from "react";
import { FaVideo, FaCode } from "react-icons/fa6";
import { IoImage } from "react-icons/io5";

interface ActionProps {
  onImageClick: () => void;
}

const ActionIcons: React.FC<ActionProps> = ({ onImageClick }) => {
  const [imageHover, setImageHover] = useState(false);
  const [videoHover, setVideoHover] = useState(false);
  const [codeHover, setCodeHover] = useState(false);

  return (
    <IconsWrap>
      <ITWrap>
        <IoImage
          size={20}
          onMouseEnter={() => setImageHover(true)}
          onMouseLeave={() => setImageHover(false)}
          onClick={onImageClick}
        />
        {imageHover && <Title title="Image" styles={Styles.title} />}
      </ITWrap>
      <ITWrap>
        <FaVideo
          size={20}
          onMouseEnter={() => setVideoHover(true)}
          onMouseLeave={() => setVideoHover(false)}
        />
        {videoHover && <Title title="Video" styles={Styles.title} />}
      </ITWrap>
      <ITWrap>
        <FaCode
          size={20}
          onMouseEnter={() => setCodeHover(true)}
          onMouseLeave={() => setCodeHover(false)}
        />
        {codeHover && <Title title="Code" styles={Styles.title} />}
      </ITWrap>
    </IconsWrap>
  );
};

export default ActionIcons;

const Styles = {
  title: {
    marginTop: "25px",
    width: "auto",
  },
};
