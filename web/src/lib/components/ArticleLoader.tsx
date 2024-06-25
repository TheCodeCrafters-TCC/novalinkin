import { FeedWrapper } from "@/styles/components/styled";
import React from "react";
import ArticleLoading from "./ArticleLoading";

const ArticleLoader = () => {
  const length = [1, 2];
  return (
    <FeedWrapper>
      {length.map((load, index) => (
        <ArticleLoading key={index} />
      ))}
    </FeedWrapper>
  );
};

export default ArticleLoader;
