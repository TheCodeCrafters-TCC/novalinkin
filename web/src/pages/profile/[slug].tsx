import { Profile } from "@/components";
import Head from "next/head";
import React, { startTransition, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { InfoPageHeader, NetworkDown } from "@/lib";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { setProfileQuery } from "@/redux/systemSlice";
import { getCurrentUser } from "@/redux/thunks/user";
import { onToast } from "@/lib/components/ToastContainer";
import { useRouter } from "next/router";
import { ContentWrapper } from "@/styles/components/styled";

interface SlugProps {
  slug: string | null;
}

const Slug: React.FC<SlugProps> = ({ slug }) => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const userState = useAppSelector((state) => state.user);
  const netErr = userState.fetching_current_status === "failed";
  const currentUser = userState.currentUser;
  const Name = currentUser.firstName + " " + currentUser.lastName;
  const router = useRouter();

  useEffect(() => {
    if (!auth.userLoaded) {
      onToast("error", "Not authorized");
      router.replace("/auth/login");
    }
  }, [slug]);

  useEffect(() => {
    startTransition(() => {
      dispatch(setProfileQuery(slug as any));
    });
  }, [dispatch, slug]);

  useEffect(() => {
    dispatch(getCurrentUser(slug));
  }, [slug]);

  return (
    <>
      <Head>
        <title>{Name} | NovaLinkin</title>
      </Head>
      <div>
        <InfoPageHeader filter />
        {netErr ? (
          <ContentWrapper>
            <NetworkDown />
          </ContentWrapper>
        ) : (
          <Profile />
        )}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;

  return {
    props: { slug },
  };
};

export default Slug;
