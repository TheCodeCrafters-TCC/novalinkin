import { DSearch } from "@/lib";
import React from "react";
import ConnectBar from "../user/connect/ConnectBar";
import { DynamicWrap } from "@/styles/global";

const HomeDynamics = () => {
  return (
    <DynamicWrap>
      <DSearch placeholder="Search articles..." queryPage="articles" />
      <ConnectBar />
    </DynamicWrap>
  );
};

export default HomeDynamics;
