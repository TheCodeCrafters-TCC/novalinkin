import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { Backdrop, Button } from "@/lib";
import { deleteCommunity } from "@/redux/thunks/community";
import { colors, getDevice, poppins, poppinsSemibold } from "@/styles/global";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

export interface DeleteProps {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<string>> | any;
  community?: CommunityType;
  userId?: string | any;
}

const ConfirmDelete = ({ setIsOpen, isOpen }: DeleteProps) => {
  const communityState = useAppSelector((state) => state.community);
  const userId = useAppSelector((state) => state.auth.userId);
  const isLoading = communityState.delete_status === "pending";
  const communityId = communityState.currentCommunity._id;
  const dispatch = useAppDispatch();

  function delComm() {
    dispatch(deleteCommunity({ ownerId: userId, communityId }));
  }

  const DelAction = () => (
    <ConfirmContainer onClick={(e) => e.stopPropagation()}>
      <h1 className={poppinsSemibold.className}>Delete Community</h1>
      <p className={poppins.className}>
        This action cannot be undone. All data, including articles, members, and
        settings, will be permanently deleted.
      </p>
      <Button
        label="Confirm"
        variant="danger"
        radius="sm"
        width="100%"
        Loading={isLoading}
        disabled={isLoading}
        onActionClick={delComm}
      />
    </ConfirmContainer>
  );
  return (
    <>
      {isOpen && (
        <Backdrop onClose={() => setIsOpen(false)}>
          <DelAction />
        </Backdrop>
      )}
    </>
  );
};

export default ConfirmDelete;

const ConfirmContainer = styled.div`
  width: 500px;
  background: ${({ theme }) => theme.colors.background};
  height: auto;
  border-radius: 11px;
  gap: 1.3rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.nav};

  h1 {
    font-size: 21px;
  }

  p {
    font-size: 12px;
    color: ${colors.primaryGray};
  }

  @media screen and (max-width: ${getDevice("xl")}) {
    width: 45%;
  }
  @media screen and (max-width: ${getDevice("md")}) {
    width: 95%;
  }
  p {
    font-size: 16px;
    /* text-align: center; */
  }
`;
