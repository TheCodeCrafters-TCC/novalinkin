import { useProfileEdit } from "@/context/useProfileEdit";
import { Backdrop } from "@/lib";
import {
  StyledShareContainer,
  ContentHeader,
} from "@/styles/components/styled";
import { poppinsSemibold } from "@/styles/global";
import React from "react";
import { IoClose } from "react-icons/io5";

const ProfileEdit = () => {
  const { onClose } = useProfileEdit();
  const PopupEdit = () => (
    <StyledShareContainer>
      <ContentHeader>
        <h1 className={poppinsSemibold.className}>Edit Profile</h1>
        <IoClose size={35} onClick={onClose} />
      </ContentHeader>
    </StyledShareContainer>
  );

  return (
    <Backdrop>
      <PopupEdit />
    </Backdrop>
  );
};

export default ProfileEdit;
