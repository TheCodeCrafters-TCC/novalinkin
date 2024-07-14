import { ArticleBuffer, Viewed } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { Empty, InfoPageHeader, NetworkDown } from "@/lib";
import { getArticle } from "@/redux/thunks/article";
import { poppins } from "@/styles/global";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Article = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { articleId } = router.query;
  const articleState = useAppSelector((state) => state.article);
  const userId = useAppSelector((state) => state.auth.userId);
  const isLoading = articleState.fetching_current_status === "pending";
  const netError = articleState.fetching_current_status === "failed";
  const notFound = articleState.fetching_current_error === "Article not found";
  const currentWidth = window.innerWidth;
  const width = currentWidth <= 450 ? "100%" : "550px";

  useEffect(() => {
    dispatch(getArticle({ articleId, userId }));
  }, [articleId]);
  return (
    <>
      <Head>
        <title>Article | NovaLinkin</title>
      </Head>
      <InfoPageHeader label="Article" />
      <main
        className={poppins.className}
        style={{ width: width, height: "100%" }}
      >
        {netError ? (
          <NetworkDown />
        ) : isLoading ? (
          <ArticleBuffer />
        ) : notFound ? (
          <Empty
            style={{ marginTop: "5rem" }}
            label={articleState.fetching_current_error}
          />
        ) : (
          <Viewed />
        )}
      </main>
    </>
  );
};

export default Article;
