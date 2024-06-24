import { EmailSent, ForgotPassInfo, Header, RequestReset } from "@/components";
import { getDevice } from "@/styles/global";
import { AuthContainer } from "@/styles/pages/styled";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const ForgotPassword = () => {
  const router = useRouter();
  const { email } = router.query;
  return (
    <>
      <Head>
        <title>Forgot Password | NovaLinkin</title>
      </Head>
      <AuthContainer>
        <Header />
        <ForgotPassWrapper>
          {email ? (
            <EmailSent />
          ) : (
            <>
              <ForgotPassInfo />
              <RequestReset />
            </>
          )}
        </ForgotPassWrapper>
      </AuthContainer>
    </>
  );
};

export default ForgotPassword;
const ForgotPassWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  height: 75vh;

  @media screen and (max-width: ${getDevice("xl")}) {
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 85vh;
    gap: 1px;
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 85vh;
    gap: 1px;
  }
`;
