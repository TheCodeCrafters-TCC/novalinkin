import { profileInfo } from "@/data/info";
import { Button, SkeletonImage, Title, TruncateText } from "@/lib";
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
import { ProfileProps } from "./Profile";

const Info: React.FC<ProfileProps> = ({ isfetching }) => {
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
          {isfetching ? (
            <SkeletonImage height="35px" width="150px" borderradius="5px" />
          ) : (
            <h1 className={poppinsSemibold.className}>{profileInfo.name}</h1>
          )}
          {isfetching ? (
            <SkeletonImage height="34px" width="30px" borderradius="3px" />
          ) : (
            <MdVerified
              onMouseEnter={toastTitle}
              onMouseLeave={UntoastTitle}
              size={20}
              color={colors.primaryColor}
            />
          )}
        </InfoFlexBox>
        {isfetching ? (
          <SkeletonImage height="35px" width="110px" borderradius="5px" />
        ) : (
          <Button
            variant="primary"
            radius="xs"
            label="Connect"
            width="100px"
            height="35px"
            Loading={connecting}
            onActionClick={connectWith}
          />
        )}
      </FlexBetween>
      {isfetching ? (
        <SkeletonImage height="40px" width="100%" borderradius="5px" />
      ) : (
        <TruncateText
          text={profileInfo._desc}
          maxLength={100}
          className={`__desc_tag ${poppinsNormal.className}`}
          showClass={`__desc_tag ${poppinsNormal.className}`}
        />
      )}
      {isfetching ? (
        <SkeletonImage height="25px" width="100%" borderradius="5px" />
      ) : (
        <Platform profileInfo={profileInfo} />
      )}
      {isfetching ? (
        <SkeletonImage height="25px" width="100%" borderradius="5px" />
      ) : (
        <Socails />
      )}
    </InfoContainer>
  );
};

export default Info;
