import { ConnectifyLoaderImg, LogoImg2 } from "@/assets";
import { PuffScaleLoader } from "@/lib/components/Loaders";
import {
  LoaderImage,
  StyledLoader,
  TaskText,
} from "@/styles/components/styled";
import { colors, poppins } from "@/styles/global";
import Head from "next/head";
import React, { useEffect, useMemo, useState } from "react";

const LoadingScreen = () => {
  const messages = [
    "Fetching articles...",
    "Loading resources...",
    "Preparing content...",
  ];
  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  const createActionMessage = useMemo(() => {
    return () => {
      setCurrentMessage((prev) => {
        const currentAction = messages.indexOf(prev);
        const nextAction = (currentAction + 1) % messages.length;
        return messages[nextAction];
      });
    };
  }, [messages]);

  useEffect(() => {
    const ActionInterval = setInterval(createActionMessage, 2000);

    return () => clearInterval(ActionInterval);
  }, [createActionMessage]);

  return (
    <>
      <Head>
        <title>Loading...</title>
      </Head>
      <StyledLoader>
        <LoaderImage src={LogoImg2} alt="Loading" priority />
        <PuffScaleLoader size={40} color={colors.primaryColor} />
        <TaskText className={poppins.className}>{currentMessage}</TaskText>
      </StyledLoader>
    </>
  );
};

export default LoadingScreen;
