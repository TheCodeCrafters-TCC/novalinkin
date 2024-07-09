import { notdata } from "@/constants/notify";
import { ContentWrapper } from "@/styles/components/styled";
import { getDevice, poppins } from "@/styles/global";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import styled from "styled-components";
import Not_Item from "./Not_Item";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import NotificationBuffer from "../skeleton/NotificationBuffer";
import { Empty, NetworkDown } from "@/lib";
import { getNotifications } from "@/redux/thunks/notifications";

const Notifications = () => {
  const router = useRouter();
  const notState = useAppSelector((state) => state.notifications);
  const isLoading = notState.fetch_status === "pending";
  const noAlert = notState?.all?.length < 1;
  const Alert = notState?.all && notState?.all;
  const auth = useAppSelector((state) => state.auth);
  const netError = notState.fetch_status === "failed";
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNotifications(auth.userId));
  }, []);

  return (
    <ContentWrapper>
      <ConnectHeader>
        <FaArrowLeft size={35} onClick={() => router.back()} />
        <h1 className={poppins.className}>Notifications</h1>
      </ConnectHeader>
      <Styled_Not_Wrap>
        {netError ? (
          <NetworkDown />
        ) : noAlert && isLoading ? (
          <>
            <NotificationBuffer />
            <NotificationBuffer />
          </>
        ) : noAlert ? (
          <Empty label="You don't have any notifications" />
        ) : (
          Alert?.map((not, index) => <Not_Item key={index} not_i={not} />)
        )}
      </Styled_Not_Wrap>
    </ContentWrapper>
  );
};

export default Notifications;

const ConnectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
  width: 100%;
  padding: 1rem;

  svg {
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    &:hover {
      background: ${({ theme }) => theme.colors.icon};
    }

    @media screen and (max-width: ${getDevice("md")}) {
    }
  }

  h1 {
    font-size: 23px;
  }

  @media screen and (max-width: ${getDevice("md")}) {
    display: none;
    margin-top: 11px;
    h1 {
      font-size: 22px;
    }
  }
`;

export const Styled_Not_Wrap = styled.div`
  flex-direction: column;
  display: flex;

  @media screen and (max-width: ${getDevice("md")}) {
    margin-top: 3.8rem;
  }
`;
