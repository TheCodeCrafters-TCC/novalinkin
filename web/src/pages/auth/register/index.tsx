import { AuthInputs, Header, Info, OTP } from "@/components";
import { AuthContainer, AuthWrapper } from "@/styles/pages/styled";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const register = () => {
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const { stage } = router.query;

  return (
    <>
      <Head>
        <title>Register| Connectify</title>
      </Head>
      <AuthContainer>
        <Header />
        <AuthWrapper>
          {stage ? (
            <OTP />
          ) : (
            <>
              <Info check={checked} setCheck={setChecked} />
              <AuthInputs checked={checked} setCheck={setChecked} />
            </>
          )}
        </AuthWrapper>
      </AuthContainer>
    </>
  );
};

export default register;
