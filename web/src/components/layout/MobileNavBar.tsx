import { TestPlaceholderImg } from "@/assets";
import { ModeIcon } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { toggleTheme } from "@/redux/systemSlice";
import {
  HImage,
  HeaderInfoWrap,
  StyledActionHeader,
  StyledHeaderNav,
} from "@/styles/components/styled";
import { poppins } from "@/styles/global";
import { MobileNavProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";

const MobileNavBar: React.FC<MobileNavProps> = ({
  hasFilterIcon,
  hasModeIcon,
  hasSearchIcon,
  hasUserIcon,
  label,
  infoPage,
}) => {
  const isUser = true;
  const theme = useAppSelector((state) => state.system.theme);
  const isLight = theme === "light";
  const dispatch = useAppDispatch();
  const router = useRouter();
  function handleTheme() {
    dispatch(toggleTheme());
  }

  return (
    <StyledHeaderNav className="nav_bar_top">
      {hasUserIcon && <HImage src={TestPlaceholderImg} alt="user" priority />}
      {infoPage && (
        <HeaderInfoWrap>
          <IoArrowBack size={25} onClick={() => router.back()} />
          <p className={poppins.className}>{label}</p>
        </HeaderInfoWrap>
      )}
      <StyledActionHeader>
        {hasSearchIcon && <FiSearch size={25} />}
        {hasFilterIcon && isUser && <VscSettings size={25} />}
        {hasModeIcon && <ModeIcon isLight={isLight} dispatch={handleTheme} />}
      </StyledActionHeader>
    </StyledHeaderNav>
  );
};

export default MobileNavBar;
