import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { toggleTheme } from "@/redux/systemSlice";
import { AuthHeader } from "@/styles/pages/styled";
import React from "react";
import { IoMdSunny } from "react-icons/io";
import { PiMoonFill } from "react-icons/pi";
import Logo from "../layout/Logo";

const Header = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.system.theme);
  const isLight = theme === "light";
  return (
    <AuthHeader>
      <Logo />
      {isLight ? (
        <PiMoonFill onClick={() => dispatch(toggleTheme())} size={30} />
      ) : (
        <IoMdSunny onClick={() => dispatch(toggleTheme())} size={30} />
      )}
    </AuthHeader>
  );
};

export default Header;
