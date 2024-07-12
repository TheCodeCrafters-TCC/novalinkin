import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { Button } from "@/lib";
import {
  acceptJoinRequest,
  declineJoinRequest,
} from "@/redux/thunks/community";
import { colors, poppins } from "@/styles/global";
import { UserTProps } from "@/types";
import Image from "next/image";
import React from "react";
import { MdVerified } from "react-icons/md";
import styled from "styled-components";

interface JoinProps {
  user: UserTProps;
}

const JoinRequest = ({ user }: JoinProps) => {
  const name = user.firstName + " " + user.lastName;
  const community = useAppSelector((state) => state.community);
  const ownerId = useAppSelector((state) => state.auth.userId);
  const communityId = community.currentCommunity._id;
  const isAccepting = community.accepting_req_status === "pending";
  const isDeclining = community.rejecting_req_status === "pending";
  const currentId = community.current_req.find(
    (c) => c.connectionRequest === user._id
  );
  const requestId = currentId?._id;
  const dispatch = useAppDispatch();

  function accept(e: React.ChangeEvent) {
    e.stopPropagation();
    dispatch(acceptJoinRequest({ ownerId, communityId, requestId }));
  }
  function decline(e: React.ChangeEvent) {
    e.stopPropagation();
    dispatch(declineJoinRequest({ ownerId, communityId, requestId }));
  }

  return (
    <Container>
      <ButtonWrap>
        <UImage
          src={user?.userProfile}
          alt={user.firstName}
          width={60}
          height={60}
        />
        <p className={poppins.className}>{name}</p>
        {user.isVerified && <MdVerified size={20} />}
      </ButtonWrap>
      <ButtonWrap>
        <Button
          label="Accept"
          variant="success"
          height="35px"
          radius="sm"
          width="100px"
          onActionClick={accept}
          disabled={isAccepting}
          //   Loading={isAccepting}
        />
        <Button
          label="Decline"
          variant="danger"
          height="35px"
          radius="sm"
          width="100px"
          onActionClick={decline}
          disabled={isDeclining}
          //   Loading={isDeclining}
        />
      </ButtonWrap>
    </Container>
  );
};

export default JoinRequest;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  p {
    font-size: 16px;
  }

  svg {
    color: ${colors.primaryColor};
    transform: translateX(-13px);
  }
`;

const UImage = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
