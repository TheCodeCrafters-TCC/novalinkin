import { profileInfo } from "@/data/info";
import { Button, Title, TruncateText } from "@/lib";
import { InfoContainer, InfoFlexBox } from "@/styles/components/styled";
import {
  FlexBetween,
  colors,
  poppinsNormal,
  poppinsSemibold,
} from "@/styles/global";
import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
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
          <MdVerified
            onMouseEnter={toastTitle}
            onMouseLeave={UntoastTitle}
            size={20}
            color={colors.primaryColor}
          />
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
