import { ArticlesImg, CommunityImg } from "@/assets";
import { poppinsNormal } from "@/styles/global";
import { ContainerWrapper, EachImage, EachWrap } from "@/styles/pages/styled";
import { useRouter } from "next/router";
import React from "react";

const Container = () => {
  const router = useRouter();

  return (
    <ContainerWrapper>
      <EachWrap
        className="__left_col"
        onClick={() => router.push("/create/article")}
      >
        <EachImage src={ArticlesImg} alt="Share articles" priority />
        <p className={poppinsNormal.className}>Share Articles</p>
      </EachWrap>
      <EachWrap
        className="__right_col"
        onClick={() => router.push("/create/community")}
      >
        <EachImage src={CommunityImg} alt="Share articles" priority />
        <p className={poppinsNormal.className}>Community</p>
      </EachWrap>
    </ContainerWrapper>
  );
};

export default Container;
