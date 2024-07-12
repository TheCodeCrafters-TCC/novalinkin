import { useCRequestsModal } from "@/context/useCRequest";
import { getUserById } from "@/helper/get";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { Backdrop, Empty } from "@/lib";
import { getDevice, poppinsSemibold } from "@/styles/global";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import JoinRequest from "../community/view/JoinRequest";
import CRequestBuffer from "../skeleton/CRequestBuffer";
import { fetchJoinRequest } from "@/redux/thunks/community";

const CommunityRequest = () => {
  const { onClose } = useCRequestsModal();
  const communityState = useAppSelector((state) => state.community);
  const current = communityState.currentCommunity;
  const [users, setUsers] = useState([]);
  const isLoading = communityState.fetch_req_status === "pending";
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchJoinRequest(current._id));
  }, []);

  useEffect(() => {
    const getReqUsers = async () => {
      const data = await Promise.all(
        communityState.current_req.map(
          async (req) => await getUserById(req.connectionRequest)
        )
      );
      setUsers(data as any);
    };
    getReqUsers();
  }, [communityState.current_req]);

  const Requests = () => (
    <StyledReq onClick={(e) => e.stopPropagation()}>
      <ContentHeader>
        <h1 className={poppinsSemibold.className}>Join requests</h1>
        <IoClose size={35} onClick={onClose} />
      </ContentHeader>
      <ActionsWrap>
        {isLoading ? (
          <>
            <CRequestBuffer />
            <CRequestBuffer />
            <CRequestBuffer />
            <CRequestBuffer />
          </>
        ) : communityState.current_req.length < 1 ? (
          <Empty label="No join requests yet" />
        ) : (
          users.map((user, index) => <JoinRequest user={user} key={index} />)
        )}
      </ActionsWrap>
    </StyledReq>
  );
  return (
    <Backdrop onClose={onClose}>
      <Requests />
    </Backdrop>
  );
};

export default CommunityRequest;

const StyledReq = styled.div`
  width: 35%;
  background: ${({ theme }) => theme.colors.background};
  height: 75%;
  border-radius: 11px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.nav};
  overflow-y: auto;

  @media screen and (max-width: ${getDevice("xl")}) {
    width: 70%;
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    width: 70%;
  }
  @media screen and (max-width: ${getDevice("md")}) {
    width: 95%;
  }
`;

const ContentHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
  display: flex;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-size: 20px;
  }

  svg {
    padding: 5px;
    border-radius: 4px;
    &:hover {
      background: ${({ theme }) => theme.colors.icon};
      cursor: pointer;
    }
  }
`;

const ActionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1rem;
`;
