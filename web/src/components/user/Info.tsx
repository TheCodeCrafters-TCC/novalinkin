import { profileInfo } from "@/data/info";
import { Button, SkeletonImage, Title, TruncateText } from "@/lib";
import { InfoContainer, InfoFlexBox } from "@/styles/components/styled";
import {
  FlexBetween,
  colors,
  poppinsNormal,
  poppinsSemibold,
} from "@/styles/global";
import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import Platform from "./info/Platform";
import Socails from "./info/Socails";
import { ProfileProps } from "./Profile";
import { useProfileEdit } from "@/context/useProfileEdit";
import { getCurrentReq } from "@/helper/get";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { onToast } from "@/lib/components/ToastContainer";
import {
  acceptReq,
  sendConnectionReq,
  unconnectUser,
} from "@/redux/thunks/user";
import { RequestProps } from "@/types";

const Info: React.FC<ProfileProps> = ({ isfetching, user, userId }) => {
  const { onOpen } = useProfileEdit();
  const isProfile = user?._id === userId;
  const name = user?.firstName + " " + user?.lastName;
  const auth = useAppSelector((state) => state.auth);
  const receiverId = user && user._id;
  const connectionRequest = auth.userId;
  const [request, setRequest] = useState<RequestProps>();
  const dispatch = useAppDispatch();
  const reqState = useAppSelector((state) => state.user.connect_req_status);
  const isLoading = reqState === "pending";

  useEffect(() => {
    const fetchReq = async () => {
      const response = await getCurrentReq({ receiverId, connectionRequest });
      setRequest(response);
    };
    fetchReq();
  });

  const awaitingAproval = request?.requestId === connectionRequest;
  const isconnected = request?.status === "Accepted";
  const connectId = request?._id;
  // const userId = auth.userId;

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
    <InfoContainer>
      <FlexBetween>
        <InfoFlexBox>
          {isfetching ? (
            <SkeletonImage height="35px" width="150px" borderradius="5px" />
          ) : (
            <h1 className={poppinsSemibold.className}>{name}</h1>
          )}
          {isfetching ? (
            <SkeletonImage height="34px" width="30px" borderradius="3px" />
          ) : (
            <>
              {user?.isVerified && (
                <MdVerified size={20} color={colors.primaryColor} />
              )}
            </>
          )}
        </InfoFlexBox>
        {isfetching ? (
          <SkeletonImage height="35px" width="110px" borderradius="5px" />
        ) : (
          <>
            {isProfile ? (
              <Button
                variant="primary"
                radius="xs"
                label="Edit profile"
                width="100px"
                height="35px"
                onActionClick={onOpen}
              />
            ) : (
              <>
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
              </>
            )}
          </>
        )}
      </FlexBetween>
      {isfetching ? (
        <SkeletonImage height="40px" width="100%" borderradius="5px" />
      ) : (
        <TruncateText
          text={user?.description}
          maxLength={100}
          className={`__desc_tag ${poppinsNormal.className}`}
          showClass={`__desc_tag ${poppinsNormal.className}`}
        />
      )}
      {isfetching ? (
        <SkeletonImage height="25px" width="100%" borderradius="5px" />
      ) : (
        <Platform user={user} />
      )}
      {isfetching ? (
        <SkeletonImage height="25px" width="100%" borderradius="5px" />
      ) : (
        <Socails user={user} />
      )}
    </InfoContainer>
  );
};

export default Info;
