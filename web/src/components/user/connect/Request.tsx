import React from "react";
import { ProfileProps } from "../Profile";
import { Button } from "@/lib";
import { InfoWrap } from "@/lib/styles/styled";
import {
  StyledConnectUser,
  ConnectUserImage,
  ConnectUserInfo,
} from "@/styles/components/styled";
import { SpaceBetween, poppinsBold, colors } from "@/styles/global";
import { useRouter } from "next/router";
import { MdVerified } from "react-icons/md";
import { RequestUserProps } from "@/types";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { acceptReq, declineReq } from "@/redux/thunks/user";

export interface ReqProps {
  user: RequestUserProps;
}

const Request: React.FC<ReqProps> = ({ user }) => {
  const md = global?.window?.innerWidth <= 450;
  const name = user?.firstName + " " + user?.lastName;
  const mdName = name.length > 6 ? name.slice(0, 6) + "..." : name;
  const Name = md ? mdName : name;
  const router = useRouter();
  const userId = useAppSelector((state) => state.auth.userId);
  const request = useAppSelector((state) => state.user.connect_req);
  const currentReq = request.find((r) => r.connectionRequest === user._id);
  const connectId = currentReq?._id;
  const dispatch = useAppDispatch();

  function accept(e: React.ChangeEvent) {
    e.stopPropagation();
    dispatch(acceptReq({ userId, connectId }));
    console.log("currentReq:", currentReq);
  }
  function decline(e: React.ChangeEvent) {
    e.stopPropagation();
    dispatch(declineReq({ userId, connectId }));
    console.log("currentReq:", currentReq);
  }
  return (
    <SpaceBetween onClick={() => router.push(`/profile/${user.slugName}`)}>
      <StyledConnectUser>
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
              <p className={poppinsBold.className}>{Name}</p>
              {user?.isVerified && (
                <MdVerified size={25} color={colors.primaryColor} />
              )}
            </InfoWrap>
            <InfoWrap>
              <Button
                label="Accept"
                variant="success"
                height="35px"
                radius="sm"
                width="100px"
                onActionClick={accept}
              />
              <Button
                label="Decline"
                variant="danger"
                height="35px"
                radius="sm"
                width="100px"
                onActionClick={decline}
              />
            </InfoWrap>
          </SpaceBetween>
        </ConnectUserInfo>
      </StyledConnectUser>
    </SpaceBetween>
  );
};

export default Request;
