import { DSearch } from "@/lib";
import { DynamicWrap } from "@/styles/global";
import React from "react";
import MostViewed from "../user/connect/MostViewed";

const Connect = () => {
  return (
    <DynamicWrap>
      <DSearch placeholder="Search User..." queryPage="connect" isConnect />
      <MostViewed />
    </DynamicWrap>
  );
};

export default Connect;
