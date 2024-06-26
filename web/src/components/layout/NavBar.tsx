"use client";

import { ActionBarWrap, StyledNav } from "@/styles/components/styled";
import React from "react";
import Logo from "./Logo";
import { PiMoonFill } from "react-icons/pi";
import { IoMdSettings, IoMdSunny } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { toggleTheme } from "@/redux/systemSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hooks/state";
import { useRouter } from "next/router";

const NavBar = () => {
  const dispatch = useDispatch();
  const theme = useAppSelector((state) => state.system.theme);
  const isLight = theme === "light";
  const path = useRouter();
  const hideNav = path.pathname.includes("auth");

  return (
    <StyledNav hidden={hideNav} className="nav_bar">
      <Logo />
      <ActionBarWrap className="action-icons">
        {isLight ? (
          <PiMoonFill onClick={() => dispatch(toggleTheme())} size={30} />
        ) : (
          <IoMdSunny onClick={() => dispatch(toggleTheme())} size={30} />
        )}
        <IoMdSettings size={30} />
        <FiLogOut size={30} />
      </ActionBarWrap>
    </StyledNav>
  );
};

export default NavBar;
