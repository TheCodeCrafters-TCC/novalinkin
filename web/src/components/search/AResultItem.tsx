import { poppins } from "@/styles/global";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import styled from "styled-components";

const AResultItem = ({ art }: any) => {
  const truncateDesc =
    art.desc?.length > 60 ? art.desc?.slice(0, 60) + "..." : art.desc;
  return (
    <ResultWrap>
      <p className={poppins.className}>{truncateDesc}</p>
      <MdArrowOutward size={35} />
    </ResultWrap>
  );
};

export default AResultItem;

const ResultWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  p {
    font-size: 15px;
  }
`;
