import { FeedWrapper } from "@/styles/components/styled";
import React from "react";
import BelongTo from "./BelongTo";
import All from "./All";
import Header from "./Header";

const Container = () => {
  return (
    <FeedWrapper>
      <Header />
      <BelongTo />
      <All />
    </FeedWrapper>
  );
};

export default Container;
