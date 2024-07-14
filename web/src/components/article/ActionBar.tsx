import { ActionButton } from "@/lib";
import React from "react";
import styled from "styled-components";
import { ArticleProps } from "./Item";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { likeArticle, likeCurrentArticle } from "@/redux/thunks/article";
import { useRouter } from "next/router";

interface ActionBarProps {
  article: ArticleType;
  OpenComment: any;
}

const ActionBar = ({ article, OpenComment }: ActionBarProps) => {
  const userId = useAppSelector((state) => state.auth.userId);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isCurrent = router.pathname === "/article/[articleId]";

  function like() {
    if (isCurrent) {
      dispatch(likeCurrentArticle({ userId, articleId: article._id }));
    } else {
      dispatch(likeArticle({ userId, articleId: article._id }));
    }
  }
  return (
    <StyledAction onClick={(e) => e.stopPropagation()}>
      <ActionButton
        data={article.likes.length}
        title="Likes"
        isBold={article.likes.includes(userId)}
        variant="like"
        onActionClick={like}
      />
      <ActionButton
        data={article.comments.length}
        title="Comments"
        variant="comments"
        onActionClick={OpenComment}
      />
      <ActionButton data={article.views.length} title="Views" variant="views" />
      <ActionButton data={article.stars.length} title="Stars" variant="star" />
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
