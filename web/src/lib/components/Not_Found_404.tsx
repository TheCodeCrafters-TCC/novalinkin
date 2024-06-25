import { Not_Found } from "@/assets";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface StyleProps {
  style?: React.CSSProperties;
}

const Not_Found_404: React.FC<StyleProps> = ({ style }) => {
  return (
    <NOT_FOUND_ style={style}>
      <N_404_Image src={Not_Found} alt="404" priority />
    </NOT_FOUND_>
  );
};

export default Not_Found_404;

const NOT_FOUND_ = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const N_404_Image = styled(Image)`
  width: 200px;
  height: 200px;
`;
