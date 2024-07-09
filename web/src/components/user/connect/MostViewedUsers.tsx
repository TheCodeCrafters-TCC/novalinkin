import React from "react";
import styled from "styled-components";
import ConnectUser from "./ConnectUser";
import { colors, poppinsNormal } from "@/styles/global";
import { useRouter } from "next/router";
import { useAppSelector } from "@/hooks/state";
import { ServerDown } from "@/lib";

const MostViewedUser = () => {
  const router = useRouter();
  const Users = useAppSelector((state) => state.user);
  const currentUser = useAppSelector((state) => state.auth);
  const netError = Users.fetching_status === "failed";
  return (
    <StyledConnect>
      {netError ? (
        <ServerDown />
      ) : (
        Users.users
          .filter((user) => user._id !== currentUser.userId)
          .slice(0, 4)
          .map((user, index) => <ConnectUser user={user} key={index} />)
      )}
    </StyledConnect>
  );
};

export default MostViewedUser;

const StyledConnect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
`;
