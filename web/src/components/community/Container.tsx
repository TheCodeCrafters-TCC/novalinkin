import { FeedWrapper } from "@/styles/components/styled";
import React from "react";
import BelongTo from "./BelongTo";
import All from "./All";

const Container = () => {
  return (
    <FeedWrapper>
      <BelongTo />
      <All />
    </FeedWrapper>
  );
};

export default Container;
