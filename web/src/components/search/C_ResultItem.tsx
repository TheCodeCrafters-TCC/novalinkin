import { N_Wrapper } from "@/styles/components/styled";
import { poppinsSemibold, colors } from "@/styles/global";
import { CommunityProps } from "@/types";
import Image from "next/image";
import React from "react";
import { MdVerified } from "react-icons/md";
import styled from "styled-components";

const C_ResultItem: React.FC<CommunityProps> = ({
  community: { name, isVerified, image },
}) => {
  return (
    <N_Wrapper>
      <N_Image src={image} alt={name} priority />
      <p className={poppinsSemibold.className}>{name}</p>
      {isVerified && <MdVerified size={20} color={colors.gold} />}
    </N_Wrapper>
  );
};

export default C_ResultItem;

const N_Image = styled(Image)`
  width: 55px;
  height: 55px;
`;
