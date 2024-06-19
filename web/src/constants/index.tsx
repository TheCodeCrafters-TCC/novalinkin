import React from "react";
import { IoMdSunny } from "react-icons/io";
import { PiMoonFill } from "react-icons/pi";

interface getModeProps {
  dispatch: () => void;
  isLight: boolean;
}

export function ModeIcon({ isLight, dispatch }: getModeProps) {
  return (
    <>
      {isLight ? (
        <PiMoonFill onClick={dispatch} size={30} />
      ) : (
        <IoMdSunny onClick={dispatch} size={30} />
      )}
    </>
  );
}
