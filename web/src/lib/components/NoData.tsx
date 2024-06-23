import { NoDataImg } from "@/assets";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
const open = Open_Sans({ subsets: ["latin"] });

interface NodataProps {
  style?: React.CSSProperties;
}

const NoData: React.FC<NodataProps> = ({ style }) => {
  return (
    <NDWrap style={style}>
      <StyledNOWrap src={NoDataImg} alt="No_data-FOUND" />

      <p className={open.className}>No data found</p>
    </NDWrap>
  );
};

export default NoData;

const StyledNOWrap = styled(Image)`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const NDWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  width: 100%;
  margin-bottom: 1rem;

  p {
    font-size: 20px;
  }
`;
