import { MobileNavBar } from "@/components";
import Item from "@/components/article/Item";
import { articlesdata } from "@/data/article";
import { FeedWrapper } from "@/styles/components/styled";
import { poppins } from "@/styles/global";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const articles = () => {
  const router = useRouter();
  const { query } = router.query;
  console.log("queryFound:", query);
  return (
    <>
      <Head>
        <title>Query | Connectify</title>
      </Head>
      <MobileNavBar hasUserIcon hasSearchIcon hasModeIcon />
      <FeedWrapper className={poppins.className}>
        {articlesdata
          .filter((a) => a.desc.toLowerCase().includes(query as string))
          .map((article, index): any => (
            <Item article={article} key={index} />
          ))}
      </FeedWrapper>
    </>
  );
};

export default articles;
