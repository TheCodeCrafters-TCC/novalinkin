import { articlesdata } from "@/data/article";
import { FeedWrapper } from "@/styles/components/styled";
import React from "react";
import Item from "./Item";

const Feed = () => {
  return (
    <FeedWrapper>
      {articlesdata.map((article, index): any => (
        <Item article={article} key={index} />
      ))}
    </FeedWrapper>
  );
};

export default Feed;
