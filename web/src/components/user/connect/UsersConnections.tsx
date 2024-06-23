import { useAppSelector } from "@/hooks/state";
import { capitalizeAndRemoveHyphen } from "@/lib/hooks";
import { StyledBar, poppinsSemibold, StyledBarWrap } from "@/styles/global";
import React from "react";
import styled from "styled-components";
import ConnectWithUser from "./ConnectWithUser";

const UsersConnections = () => {
  const queryState = useAppSelector((state) => state.system.query.profileSlug);

  return (
    <StyledBar>
      <StyledConnect className={poppinsSemibold.className}>
        {capitalizeAndRemoveHyphen(queryState)} Connections
      </StyledConnect>
      <StyledBarWrap>
        <ConnectWithUser pushPath={`/profile/${queryState}/connections`} />
      </StyledBarWrap>
    </StyledBar>
  );
};

export default UsersConnections;

const StyledConnect = styled.h1`
  text-align: center;
  font-size: 20px;
`;
