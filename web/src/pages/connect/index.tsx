import { Container } from "@/components";
import { useAppSelector } from "@/hooks/state";
import { InfoPageHeader } from "@/lib";
import { onToast } from "@/lib/components/ToastContainer";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Connect = () => {
  const auth = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!auth.userLoaded) {
      onToast("error", "Not authorized");
      router.replace("/auth/login");
    }
  }, [router.pathname]);
  return (
    <>
      <Head>
        <title>Connect | NovaLinkin</title>
      </Head>
      <InfoPageHeader filter />
      <Container header="Connect" />
    </>
  );
};

export default Connect;
