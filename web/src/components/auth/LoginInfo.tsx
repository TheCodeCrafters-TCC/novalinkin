import { infoData } from "@/data/info";
import { AuthInfoWrap } from "@/styles/components/styled";
import { poppins, pollerOne } from "@/styles/global";
import React from "react";

const LoginiNFO = () => {
  return (
    <AuthInfoWrap>
      <h1 className={poppins.className}>Welcome back</h1>
      <p className={`info-tag ${poppins.className}`}>{infoData.wel}</p>
    </AuthInfoWrap>
  );
};

export default LoginiNFO;
