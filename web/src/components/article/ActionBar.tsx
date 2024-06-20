import { colors } from "@/styles/global";
import React from "react";
import { CgComment } from "react-icons/cg";
import { FaStar } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { MdInsertChart } from "react-icons/md";
import styled from "styled-components";

const ActionBar = ({ article }: any) => {
  return (
    <StyledAction>
      <StyledClick style={{ color: colors.primaryRed }}>
        <IoMdHeart size={18} />
        <p>{article.likes}</p>
      </StyledClick>
      <StyledClick style={{ color: colors.primaryColor }}>
        <CgComment size={18} />
        <p>{article.comment}</p>
      </StyledClick>
      <StyledClick>
        <MdInsertChart size={18} />
        <p>{article.views}</p>
      </StyledClick>
      <StyledClick style={{ color: colors.star500 }}>
        <FaStar size={18} />
        <p>{article.stars}</p>
      </StyledClick>
    </StyledAction>
  );
};

export default ActionBar;

const StyledAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledClick = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  &:hover {
    cursor: pointer;
  }
  p {
    font-size: 11px;
  }
`;
