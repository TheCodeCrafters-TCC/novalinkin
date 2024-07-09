import { getCurrentReq } from "@/helper/get";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { Button } from "@/lib";
import { onToast } from "@/lib/components/ToastContainer";
import {
  acceptReq,
  sendConnectionReq,
  unconnectUser,
} from "@/redux/thunks/user";
import {
  SpaceBetween,
  colors,
  poppins,
  poppinsSemibold,
} from "@/styles/global";
import { RequestProps, UserTProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import styled from "styled-components";

interface UserProps {
  user: UserTProps;
}

const ConnectUser: React.FC<UserProps> = ({ user }) => {
  const router = useRouter();
  const name = user.firstName + " " + user.lastName;
  const auth = useAppSelector((state) => state.auth);
  const receiverId = user._id;
  const connectionRequest = auth.userId;
  const [request, setRequest] = useState<RequestProps>();
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);
  const isLoading = userState.connect_req_status === "pending";

  useEffect(() => {
    const fetchReq = async () => {
      const response = await getCurrentReq({ receiverId, connectionRequest });
      setRequest(response);
    };
    fetchReq();
  }, [request]);

  const awaitingAproval = request?.requestId === connectionRequest;
  const isconnected = request?.status === "Accepted";
  const connectId = request?._id;
  const userId = auth.userId;

  function sendReq() {
    if (request?.status === "Pending" && !awaitingAproval) {
      onToast("info", "You can send twice");
    } else if (!request?.status || request.status === "Declined") {
      dispatch(sendConnectionReq({ connectionRequest, receiverId }));
      console.log("current-req:", request);
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
      <FlexUser onClick={() => router.push(`/profile/${user.slugName}`)}>
        <UserProfile
          width={50}
          height={50}
          src={user?.userProfile}
          alt={name}
        />
        <p className={poppinsSemibold.className}>{name}</p>
        {user?.isVerified && (
          <MdVerified size={20} color={colors.primaryColor} />
        )}
      </FlexUser>
      {isconnected ? (
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
    </SpaceBetween>
  );
};

export default ConnectUser;

const FlexUser = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  cursor: pointer;

  svg {
    transform: translateX(-11px);
  }

  p {
    font-size: 17px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 120px;
  }
`;

const UserProfile = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
