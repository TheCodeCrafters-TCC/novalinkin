import React from "react";
import { NotIconProps } from "../types";
import { colors, poppins } from "@/styles/global";
import styled from "styled-components";

const NotIcon = ({ varinat, label, style }: NotIconProps) => {
  const getColor = (variant: NotIconProps["varinat"]) => {
    switch (variant) {
      case "primary":
        return colors.primaryColor;
      case "seconadry":
        return colors.red600;
      default:
        return colors.red600;
    }
  };
  return (
    <>
      {label >= 1 && (
        <StyledIcon
          className={poppins.className}
          style={{ ...style, background: getColor(varinat) }}
        >
          {label}
        </StyledIcon>
      )}
    </>
  );
};

export default NotIcon;

const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid white;
  position: absolute;
  color: white;
  transform: translateY(-5px);
  left: -3px;
  font-size: 11px;
`;
