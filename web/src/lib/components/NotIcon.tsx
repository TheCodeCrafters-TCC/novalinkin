import React from "react";
import styled from "styled-components";
import { NotIconprops } from "../types";
import { colors, poppins } from "@/styles/global";

const getColor = (variant: NotIconprops["varaint"]) => {
  switch (variant) {
    case "primary":
      return colors.primaryColor;
    case "secondary":
      return colors.red600;
  }
};

const NotIcon: React.FC<NotIconprops> = ({ label, varaint }) => {
  return (
    <StyledIcon
      className={poppins.className}
      style={{ background: getColor(varaint) }}
    >
      {label}
    </StyledIcon>
  );
};

export default NotIcon;

const StyledIcon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid white;
  position: absolute;
  justify-content: center;
  display: flex;
  align-items: center;
  color: white;
  left: 5px;
  font-size: 14px;
`;
