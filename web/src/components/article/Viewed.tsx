import { useAppSelector } from "@/hooks/state";
import { FeedWrapper } from "@/styles/components/styled";
import { useRouter } from "next/router";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import styled from "styled-components";
import Item from "./Item";
import { getDevice } from "@/styles/global";
import Comment from "./Comment";

const Viewed = () => {
  const router = useRouter();
  const articleState = useAppSelector((state) => state.article);
  const article = articleState.current;
  const hasFetched = articleState.fetching_current_status === "successful";

  return (
    <FeedWrapper>
      <HeaderWrapper>
        <IoArrowBackOutline onClick={() => router.back()} size={30} />
        <p>Article</p>
      </HeaderWrapper>
      <Wrapper>
        {hasFetched && article._id ? <Item article={article} /> : ""}
        {article.comments
          .slice()
          .reverse()
          .map((cm, index) => (
            <Comment key={index} comment={cm} />
          ))}
      </Wrapper>
    </FeedWrapper>
  );
};

export default Viewed;

const HeaderWrapper = styled.div`
  position: fixed;
  width: 550px;
  background: ${({ theme }) => theme.colors.header};
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  z-index: 200;
  flex: 1;
  object-fit: contain;

  svg {
    padding: 5px;
    border-radius: 4px;
    &:hover {
      background: ${({ theme }) => theme.colors.icon};
      cursor: pointer;
    }
  }
  p {
    font-size: 17px;
  }

  @media screen and (max-width: ${getDevice("dxxl")}) {
    width: 650px;
  }
  @media screen and (max-width: ${getDevice("dxl")}) {
    width: 550px;
  }
  @media screen and (max-width: ${getDevice("xl")}) {
    width: 550px;
  }
  @media screen and (max-width: ${getDevice("xxm")}) {
    width: 480px;
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    width: 480px;
  }

  @media screen and (max-width: ${getDevice("md")}) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 3rem;
`;
