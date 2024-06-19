import { Header, LoginInfo, LoginInputs } from "@/components";
import { AuthContainer, LoginAuthWrapper } from "@/styles/pages/styled";
import Head from "next/head";
import React from "react";

const login = () => {
  return (
    <>
      <Head>
        <title>Login | Connectify</title>
      </Head>
      <AuthContainer>
        <Header />
        <LoginAuthWrapper>
          <LoginInfo />
          <LoginInputs />
        </LoginAuthWrapper>
      </AuthContainer>
    </>
  );
};

export default login;
