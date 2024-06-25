import { SpaceBetween, poppinsSemibold, colors } from "@/styles/global";
import Image, { StaticImageData } from "next/image";
import router from "next/router";
import React from "react";
import { MdVerified } from "react-icons/md";
import styled from "styled-components";

interface CMProps {
  name: string;
  image: StaticImageData;
  isVerified: boolean;
}

interface CM {
  community: CMProps;
}

const TopCM: React.FC<CM> = ({ community: { name, image, isVerified } }) => {
  const truncatedName = name.length > 20 ? name.slice(0, 20) + "..." : name;
  return (
    <SpaceBetween>
      <FlexUser>
        <UserProfile src={image} alt={name} />
        <p className={poppinsSemibold.className}>{truncatedName}</p>
        {isVerified && <MdVerified size={20} color={colors.gold} />}
      </FlexUser>
    </SpaceBetween>
  );
};

export default TopCM;
const FlexUser = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  cursor: pointer;

  svg {
    transform: translateX(-5px);
  }

  p {
    font-size: 17px;
  }
`;

const UserProfile = styled(Image)`
  width: 50px;
  height: 50px;
`;
