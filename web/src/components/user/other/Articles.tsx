import Feed from "@/components/article/Feed";
import React from "react";
import { ProfileProps } from "../Profile";
import { ArticleLoader } from "@/lib";

const Articles: React.FC<ProfileProps> = ({ isfetching }) => {
  return <>{isfetching ? <ArticleLoader /> : <Feed />}</>;
};

export default Articles;
