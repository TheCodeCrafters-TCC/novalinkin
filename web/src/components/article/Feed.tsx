import { articlesdata } from "@/data/article";
import { FeedWrapper } from "@/styles/components/styled";
import React from "react";
import Item from "./Item";
import { useAppSelector } from "@/hooks/state";

const Feed = () => {
  const articlesdata = useAppSelector((state) => state.article);

  return (
    <FeedWrapper>
      {articlesdata?.articles?.map((article, index) => (
        <Item article={article} key={index} />
      ))}
    </FeedWrapper>
  );
};

export default Feed;
