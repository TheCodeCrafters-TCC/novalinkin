import { poppins } from "@/styles/global";
import React from "react";
import styled from "styled-components";
import AResultItem from "./AResultItem";
import { useRouter } from "next/router";
import { SearchProps } from "./interface";
import { useAppSelector } from "@/hooks/state";
import { Empty } from "@/lib";

const ArticlesResult: React.FC<SearchProps> = ({ searchQuery }) => {
  const router = useRouter();
  const articlesdata = useAppSelector((state) => state.article.articles);

  const filteredArticles = articlesdata.filter((art) => {
    const desc = art.desc.toLowerCase();
    const queried = searchQuery?.toLowerCase();
    return queried && desc.includes(queried as string);
  });
  const notmatch = searchQuery && filteredArticles.length < 1;

  return (
    <ResultContainer>
      {notmatch ? (
        <Empty
          label={`No result match your input <strong>${searchQuery}</strong>`}
        />
      ) : (
        filteredArticles.map((art, index) => (
          <AResultItem art={art} key={index} />
        ))
      )}
    </ResultContainer>
  );
};

export default ArticlesResult;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
