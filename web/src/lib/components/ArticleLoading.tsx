import React from "react";
import styled from "styled-components";
import { Divider, SkeletonImage } from "..";

const ArticleLoading = () => {
  return (
    <ArticleItem>
      <ArticleHeaderWrap>
        <ArticleHeader>
          <SkeletonImage height="45px" width="45px" borderradius="50%" />
          <ArticleUserInfo>
            <SkeletonImage height="16px" width="60px" borderradius="3px" />
            <SkeletonImage height="14px" width="40px" borderradius="2px" />
          </ArticleUserInfo>
          <SkeletonImage height="19px" width="19px" borderradius="2px" />
        </ArticleHeader>
        <SkeletonImage height="25px" width="20px" borderradius="2px" />
      </ArticleHeaderWrap>
      <Divider />
      <ArticleWrap>
        <SkeletonImage height="40px" width="100%" borderradius="0" />
        <SkeletonImage height="250px" width="98%" borderradius="0" />
        <SkeletonImage height="40px" width="80%" borderradius="0" />
      </ArticleWrap>
      <Divider />
    </ArticleItem>
  );
};

export default ArticleLoading;

const ArticleItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ArticleUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;
`;

const ArticleHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 13px;
  justify-content: space-between;
`;

const ArticleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.1rem;
`;
