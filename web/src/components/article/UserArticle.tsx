import { articlesdata } from "@/data/article";
import { ContentWrapper } from "@/styles/components/styled";
import React from "react";
import Item from "./Item";

const UserArticle = () => {
  return (
    <ContentWrapper className="__articles_user">
      {articlesdata.map((article, index): any => (
        <Item article={article} key={index} />
      ))}
    </ContentWrapper>
  );
};

export default UserArticle;
