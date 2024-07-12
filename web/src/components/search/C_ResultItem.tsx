import { N_Wrapper } from "@/styles/components/styled";
import { poppinsSemibold, colors } from "@/styles/global";
import Image from "next/image";
import React from "react";
import { MdVerified } from "react-icons/md";
import styled from "styled-components";

interface CommunityProps {
  community: CommunityType;
}

const C_ResultItem: React.FC<CommunityProps> = ({
  community: { communityName, hasCommunityCheck, communityProfile },
}) => {
  return (
    <N_Wrapper>
      <N_Image src={communityProfile} alt={communityName} priority />
      <p className={poppinsSemibold.className}>{communityName}</p>
      {hasCommunityCheck && <MdVerified size={20} color={colors.gold} />}
    </N_Wrapper>
  );
};

export default C_ResultItem;

const N_Image = styled(Image)`
  width: 55px;
  height: 55px;
`;
