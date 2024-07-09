import { getCurrentReq } from "@/helper/get";
import { useAppSelector, useAppDispatch } from "@/hooks/state";
import { Button } from "@/lib";
import { onToast } from "@/lib/components/ToastContainer";
import {
  acceptReq,
  sendConnectionReq,
  unconnectUser,
} from "@/redux/thunks/user";
import {
  ConnectUserImage,
  ConnectUserInfo,
  StyledConnectUser,
} from "@/styles/components/styled";
import {
  SpaceBetween,
  colors,
  poppinsBold,
  poppinsLight,
  poppinsNormal,
} from "@/styles/global";
import { RequestProps, UserTProps } from "@/types";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import styled from "styled-components";

interface UserProps {
  user: UserTProps;
}

const User = ({ user }: UserProps) => {
  const text = user?.description;
  const maxLength = 90;
  const router = useRouter();
  const truncatedDesc =
    text?.length > maxLength ? text?.slice(0, maxLength) + "..." : text;
  const name = user?.firstName + " " + user.lastName;
  //
  const auth = useAppSelector((state) => state.auth);
  const receiverId = user._id;
  const connectionRequest = auth.userId;
  const [request, setRequest] = useState<RequestProps>();
  const dispatch = useAppDispatch();
  const reqState = useAppSelector((state) => state.user.connect_req_status);
  const isLoading = reqState === "pending";
  // const connectId

  useEffect(() => {
    const fetchReq = async () => {
      const response = await getCurrentReq({ receiverId, connectionRequest });
      setRequest(response);
    };
    fetchReq();
  }, [request]);

  const awaitingAproval = request?.requestId === connectionRequest;
  const accepted = request?.status === "Accepted";
  const connectId = request?._id;
  const userId = auth.userId;

  function sendReq(e: React.ChangeEvent) {
    e.stopPropagation();
    if (request?.status === "Pending" && !awaitingAproval) {
      onToast("info", "You can send twice");
    } else if (!request?.status || request.status === "Declined") {
      dispatch(sendConnectionReq({ connectionRequest, receiverId }));
    } else if (awaitingAproval) {
      dispatch(acceptReq({ userId, connectId }));
    }
  }

  function unPair(e: React.ChangeEvent) {
    e.stopPropagation();
    dispatch(unconnectUser({ userId, connectId }));
  }

  const acceptText = request?.status === "Pending" && awaitingAproval;

  const getStatus = () => {
    if (request?.status === "Pending" && !awaitingAproval) {
      return "Pending";
    } else if (request?.status === "Declined" || !request?.status) {
      return "Connect";
    } else if (acceptText) {
      return "Accept";
    }
  };

  return (
    <SpaceBetween>
      <StyledConnectUser
        onClick={() => router.push(`/profile/${user?.slugName}`)}
      >
        <ConnectUserImage
          width={50}
          height={50}
          src={user?.userProfile}
          alt={name}
          priority
        />
        <ConnectUserInfo>
          <SpaceBetween>
            <InfoWrap>
              <p className={poppinsBold.className}>{name}</p>
              {user?.isVerified && (
                <MdVerified size={25} color={colors.primaryColor} />
              )}
            </InfoWrap>
            {user._id !== userId && (
              <>
                {accepted ? (
                  <Button
                    label="Unconnect"
                    variant="border"
                    radius="sm"
                    width="100px"
                    height="35px"
                    onActionClick={unPair}
                  />
                ) : (
                  <Button
                    label={getStatus()}
                    variant={awaitingAproval ? "success" : "primary"}
                    radius="sm"
                    width="100px"
                    height="35px"
                    disabled={request?.status === "Pending" && !awaitingAproval}
                    onActionClick={sendReq}
                    // Loading={isLoading}
                  />
                )}
              </>
            )}
          </SpaceBetween>
          <span className={poppinsNormal.className}>{truncatedDesc}</span>
        </ConnectUserInfo>
      </StyledConnectUser>
    </SpaceBetween>
  );
};

export default User;

const InfoWrap = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
