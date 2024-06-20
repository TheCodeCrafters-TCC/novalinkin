import { poppinsNormal } from "@/styles/global";
import React from "react";
import styled from "styled-components";

interface TitleProps {
  title: string;
  width?: string;
}

const Title = ({ title, width }: TitleProps) => {
  return (
    <HoverTitle style={{ width: width }} className={poppinsNormal.className}>
      {title}
    </HoverTitle>
  );
};

export default Title;

const HoverTitle = styled.p`
  background: rgb(0, 0, 0, 0.5);
  height: auto;
  position: absolute;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
  bottom: 19px;
  left: -1px;
`;
