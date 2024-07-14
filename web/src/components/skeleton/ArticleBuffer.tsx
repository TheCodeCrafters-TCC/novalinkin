import { SkeletonImage } from "@/lib";
import { PuffScaleLoader } from "@/lib/components/Loaders";
import { FeedWrapper } from "@/styles/components/styled";
import { colors } from "@/styles/global";
import React from "react";
import styled from "styled-components";

const ArticleBuffer = () => {
  return (
    <FeedWrapper>
      <Wrapper>
        <PuffScaleLoader size={60} color={colors.primaryColor} />
      </Wrapper>
    </FeedWrapper>
  );
};

export default ArticleBuffer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  width: 100%;
  height: 85vh;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;
