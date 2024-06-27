import React from "react";
import { ProfileProps } from "../Profile";
import { ArticleLoader } from "@/lib";
import UserArticle from "@/components/article/UserArticle";

const Articles: React.FC<ProfileProps> = ({ isfetching }) => {
  return <>{isfetching ? <ArticleLoader /> : <UserArticle />}</>;
};

export default Articles;
