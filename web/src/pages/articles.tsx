import { MobileNavBar } from "@/components";
import Item from "@/components/article/Item";
import { useAppSelector } from "@/hooks/state";
import { Empty } from "@/lib";
import { FeedWrapper } from "@/styles/components/styled";
import { poppins } from "@/styles/global";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
const Articles = () => {
  const articles = useAppSelector((state) => state.article.articles);
  const router = useRouter();
  const { query } = router.query;
  const filterResult = articles.filter((article) =>
    article.desc.toLowerCase().includes(query as string)
  );
  const notMatch = filterResult.length === 0;

  return (
    <>
      <Head>
        <title>Query | NovaLinkin</title>
      </Head>
      <MobileNavBar hasUserIcon hasSearchIcon hasModeIcon />
      <FeedWrapper className={poppins.className}>
        {notMatch ? (
          <Empty
            label={`No result match your input: <strong>${query}</strong>`}
          />
        ) : (
          articles
            .filter((a) => a.desc.toLowerCase().includes(query as string))
            .map((article, index): any => (
              <Item article={article} key={index} />
            ))
        )}
      </FeedWrapper>
    </>
  );
};

export default Articles;
