import { useAppSelector } from "@/hooks/state";
import { StyledBar, poppinsSemibold, StyledBarWrap } from "@/styles/global";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ConnectWithUser from "./ConnectWithUser";
import { SkeletonImage } from "@/lib";
import { getUserById } from "@/helper/get";

export interface UCProps {
  isfetching?: boolean;
}

const UsersConnections: React.FC<UCProps> = () => {
  const queryState = useAppSelector((state) => state.system.query.profileSlug);
  const user = useAppSelector((state) => state.user);
  const isfetching = user.fetching_current_status === "pending";
  const currentUser = user.currentUser;
  const Name = currentUser.firstName + " " + currentUser.lastName;
  const truncateName = Name.length > 14 ? Name.slice(0, 14) + "..." : Name;
  const netwroks = currentUser.connections;
  const netError = user.fetching_current_status === "failed";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await Promise.all(
        currentUser.connections.map(async (u) => await getUserById(u))
      );
      setUsers(data as any);
    };
    getUsers();
  }, [currentUser]);

  return (
    <StyledBar>
      {isfetching ? (
        <SkeletonImage height="20px" width="100%" borderradius="5px" />
      ) : (
        <StyledConnect className={poppinsSemibold.className}>
          {truncateName}&apos;s Connections
        </StyledConnect>
      )}
      <StyledBarWrap>
        <ConnectWithUser
          isfetching={isfetching}
          netError={netError}
          Users={users}
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
