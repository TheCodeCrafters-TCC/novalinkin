import { Users } from "@/constants/user";
import React from "react";
import styled from "styled-components";
import ConnectUser from "./ConnectUser";
import { colors, poppinsNormal } from "@/styles/global";
import { useRouter } from "next/router";

interface BarProps {
  pushPath: string;
}

const ConnectWithUser: React.FC<BarProps> = ({ pushPath }) => {
  const router = useRouter();
  return (
    <StyledConnect>
      {Users.filter((user) => user.connection > 100)
        .sort((a, b) => a.connection - b.connection)
        .slice(0, 4)
        .map((user, index) => (
          <ConnectUser user={user} key={index} />
        ))}
      <SeeMore
        onClick={() => router.push(pushPath)}
        className={poppinsNormal.className}
      >
        See more
      </SeeMore>
    </StyledConnect>
  );
};

export default ConnectWithUser;

const StyledConnect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
`;

const SeeMore = styled.p`
  color: ${colors.primaryColor};
  text-align: center;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
