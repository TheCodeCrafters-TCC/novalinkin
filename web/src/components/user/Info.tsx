import { profileInfo } from "@/data/info";
import { Button, Title, TruncateText } from "@/lib";
import {
  InFlex,
  InfoContainer,
  InfoFlexBox,
  InfoIconsWrap,
  InfoTag,
} from "@/styles/components/styled";
import {
  FlexBetween,
  TitleFlexWrap,
  colors,
  poppins,
  poppinsNormal,
  poppinsSemibold,
} from "@/styles/global";
import React, { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLocation, IoPeople } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import { MdArticle, MdVerified } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import Platform from "./info/Platform";
import Socails from "./info/Socails";

const Info = () => {
  const [connecting, setConnecting] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  function toastTitle() {
    setShowTitle(true);
  }
  function UntoastTitle() {
    setShowTitle(false);
  }

  useEffect(() => {
    if (connecting) {
      setTimeout(() => {
        setConnecting(false);
      }, 4000);
    }
  }, [connecting]);

  function connectWith() {
    setConnecting(true);
  }
  return (
    <InfoContainer>
      <FlexBetween>
        <InfoFlexBox>
          <h1 className={poppinsSemibold.className}>{profileInfo.name}</h1>
          <TitleFlexWrap>
            <MdVerified
              onMouseEnter={toastTitle}
              onMouseLeave={UntoastTitle}
              size={20}
              color={colors.primaryColor}
            />
            {showTitle && (
              <Title width="150px" title="This account is verified" />
            )}
          </TitleFlexWrap>
        </InfoFlexBox>
        <Button
          variant="primary"
          radius="xs"
          label="Connect"
          width="100px"
          height="35px"
          Loading={connecting}
          onActionClick={connectWith}
        />
      </FlexBetween>
      <TruncateText
        text={profileInfo._desc}
        maxLength={100}
        className={`__desc_tag ${poppinsNormal.className}`}
        showClass={`__desc_tag ${poppinsNormal.className}`}
      />
      <Platform profileInfo={profileInfo} />
      <Socails />
    </InfoContainer>
  );
};

export default Info;
