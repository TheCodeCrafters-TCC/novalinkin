import { infoData } from "@/data/info";
import { AuthInfoWrap } from "@/styles/components/styled";
import { poppins } from "@/styles/global";
import React from "react";

const ForgotPassInfo = () => {
  return (
    <AuthInfoWrap>
      <h1 className={poppins.className}>Forgot your password?</h1>
      <p className={`info-tag ${poppins.className}`}>{infoData._f_desc}</p>
    </AuthInfoWrap>
  );
};

export default ForgotPassInfo;
