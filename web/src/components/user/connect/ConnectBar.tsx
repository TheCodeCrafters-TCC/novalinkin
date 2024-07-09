import { StyledBar, StyledBarWrap, poppinsSemibold } from "@/styles/global";
import React from "react";
import styled from "styled-components";
import ConnectWithUser from "./ConnectWithUser";
import { useAppSelector } from "@/hooks/state";

const ConnectBar = () => {
  const Users = useAppSelector((state) => state.user);
  const currentUser = useAppSelector((state) => state.auth);
  const netError = Users.fetching_status === "failed";
  return (
    <StyledBar>
      <StyledConnect className={poppinsSemibold.className}>
        Connect with
      </StyledConnect>
      <StyledBarWrap>
        <ConnectWithUser
          netError={netError}
          Users={Users.users.filter((user) => user._id !== currentUser.userId)}
          pushPath="/connect"
        />
      </StyledBarWrap>
    </StyledBar>
  );
};

export default ConnectBar;

const StyledConnect = styled.h1`
  text-align: center;
  font-size: 20px;
`;
