import { Users } from "@/constants/user";
import React from "react";
import styled from "styled-components";
import ConnectUser from "./ConnectUser";
import { colors, poppinsNormal } from "@/styles/global";
import { useRouter } from "next/router";

const MostViewedUser = () => {
  const router = useRouter();
  return (
    <StyledConnect>
      {Users.filter((user) => user.views > 100)
        .sort((a, b) => a.views - b.views)
        .slice(0, 4)
        .map((user, index) => (
          <ConnectUser user={user} key={index} />
        ))}
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
