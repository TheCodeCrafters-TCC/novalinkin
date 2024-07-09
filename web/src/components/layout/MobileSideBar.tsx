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
import { useAppSelector } from "@/hooks/state";

const MobileSideBar = () => {
  const router = useRouter();
  const { Onclose } = useMobileSideNav();
  const user = useAppSelector((state) => state.auth);
  const name = user.firstName + " " + user.lastName;

  function goToProfile() {
    router.push(`/profile/${user.slug}`);
    Onclose();
  }
  return (
    <StyledMSB onClick={(e) => e.stopPropagation()}>
      <HeaderSection onClick={goToProfile}>
        <HeaderUserImage src={UProfile} alt="User" priority />
        <CommInfo>
          <UserName className={poppinsSemibold.className}>{name}</UserName>
          {user.isVerified && (
            <MdVerified size={20} color={colors.primaryColor} />
          )}
        </CommInfo>
      </HeaderSection>
      <MSBLinks />
    </StyledMSB>
  );
};

export default MobileSideBar;
