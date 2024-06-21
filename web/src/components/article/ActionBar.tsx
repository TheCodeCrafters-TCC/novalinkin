import { ActionButton } from "@/lib";
import React from "react";
import styled from "styled-components";

const ActionBar = ({ article }: any) => {
  return (
    <StyledAction>
      <ActionButton data={article.likes} title="Likes" variant="like" />
      <ActionButton
        data={article.comment}
        title="Comments"
        variant="comments"
      />
      <ActionButton data={article.views} title="Views" variant="views" />
      <ActionButton data={article.stars} title="Stars" variant="star" />
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
