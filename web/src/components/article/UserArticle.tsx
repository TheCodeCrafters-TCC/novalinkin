import { ContentWrapper } from "@/styles/components/styled";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useAppSelector } from "@/hooks/state";
import { Empty } from "@/lib";
import { getUserArticles } from "@/helper/get";

const UserArticle = () => {
  const [articles, setArticles] = useState([]);
  const user = useAppSelector((state) => state.user.currentUser);

  useEffect(() => {
    const getArticles = async () => {
      const data = await getUserArticles(user._id);
      setArticles(data);
    };
    getArticles();
  }, [user]);

  return (
    <ContentWrapper className="__articles_user">
      {articles.length < 1 ? (
        <Empty label="No articles available" />
      ) : (
        articles?.map((article, index): any => (
          <Item article={article} key={index} />
        ))
      )}
    </ContentWrapper>
  );
};

export default UserArticle;
