import { UProfile } from "@/assets";
import {
  CommInfo,
  HeaderSection,
  HeaderUserImage,
  StyledMSB,
  UserName,
} from "@/styles/components/styled";
import { colors, poppinsSemibold } from "@/styles/global";
import { useRouter } from "next/router";
import React from "react";
import { MdVerified } from "react-icons/md";
import MSBLinks from "./MSBLinks";
import { useMobileSideNav } from "@/context/useMobileNav";

const MobileSideBar = () => {
  const router = useRouter();
  const { Onclose } = useMobileSideNav();

  function goToProfile() {
    router.push(`/profile/noah-moore`);
    Onclose();
  }
  return (
    <StyledMSB onClick={(e) => e.stopPropagation()}>
      <HeaderSection onClick={goToProfile}>
        <HeaderUserImage src={UProfile} alt="User" priority />
        <CommInfo>
          <UserName className={poppinsSemibold.className}>Noah Moore</UserName>
          <MdVerified size={20} color={colors.primaryColor} />
        </CommInfo>
      </HeaderSection>
      <MSBLinks />
    </StyledMSB>
  );
};

export default MobileSideBar;
