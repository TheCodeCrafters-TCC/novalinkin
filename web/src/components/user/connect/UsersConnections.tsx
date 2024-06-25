import { useAppSelector } from "@/hooks/state";
import { capitalizeAndRemoveHyphen } from "@/lib/hooks";
import { StyledBar, poppinsSemibold, StyledBarWrap } from "@/styles/global";
import React from "react";
import styled from "styled-components";
import ConnectWithUser from "./ConnectWithUser";
import { SkeletonImage } from "@/lib";

export interface UCProps {
  isfetching?: boolean;
}

const UsersConnections: React.FC<UCProps> = ({ isfetching }) => {
  const queryState = useAppSelector((state) => state.system.query.profileSlug);

  return (
    <StyledBar>
      {isfetching ? (
        <SkeletonImage height="20px" width="100%" borderradius="5px" />
      ) : (
        <StyledConnect className={poppinsSemibold.className}>
          {capitalizeAndRemoveHyphen(queryState)} Connections
        </StyledConnect>
      )}
      <StyledBarWrap>
        <ConnectWithUser
          isfetching={isfetching}
          pushPath={`/profile/${queryState}/connections`}
        />
      </StyledBarWrap>
    </StyledBar>
  );
};

export default UsersConnections;

const StyledConnect = styled.h1`
  text-align: center;
  font-size: 20px;
`;
