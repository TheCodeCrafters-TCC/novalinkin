"use client";
import { ActionBarWrap, StyledNav } from "@/styles/components/styled";
import React from "react";
import Logo from "./Logo";
import { PiMoonFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

const NavBar = () => {
  return (
    <StyledNav>
      <Logo />
      <ActionBarWrap>
        <PiMoonFill size={30} />
        <IoMdSettings size={30} />
        <FiLogOut size={30} />
      </ActionBarWrap>
    </StyledNav>
  );
};

export default NavBar;
