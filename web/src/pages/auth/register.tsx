import { AuthInputs, Header, Info } from "@/components";
import { AuthContainer, AuthWrapper } from "@/styles/pages/styled";
import Head from "next/head";
import React, { useState } from "react";

const register = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <Head>
        <title>Register | Connectify</title>
      </Head>
      <AuthContainer>
        <Header />
        <AuthWrapper>
          <Info check={checked} setCheck={setChecked} />
          <AuthInputs checked={checked} setCheck={setChecked} />
        </AuthWrapper>
      </AuthContainer>
    </>
  );
};

export default register;
