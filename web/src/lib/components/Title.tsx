import { poppins } from "@/styles/global";
import { TitleProps } from "@/types";
import React from "react";
import styled from "styled-components";

const Title: React.FC<TitleProps> = ({ title, className, styles }) => {
  return (
    <StyledTitle style={styles} className={`${className} ${poppins.className}`}>
      {title}
    </StyledTitle>
  );
};

export default Title;

const StyledTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  border-radius: 4px;
  position: absolute;
  background: rgb(0, 0, 0, 0.5);
  color: white;
  /* transform: translateY(-5px); */
  /* left: -3px; */
  font-size: 11px;
  padding: 6px;
  z-index: 50;
`;
