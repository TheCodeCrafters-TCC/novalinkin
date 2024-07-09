import React from "react";
import styled from "styled-components";
import ConnectUser from "./ConnectUser";
import { colors, poppinsNormal } from "@/styles/global";
import { useRouter } from "next/router";
import { ServerDown, SkeletonImage } from "@/lib";
import { useAppSelector } from "@/hooks/state";
import { UserTProps } from "@/types";

interface BarProps {
  pushPath: string;
  isfetching?: boolean;
  Users: UserTProps[];
  netError: boolean;
}

const ConnectWithUser: React.FC<BarProps> = ({
  pushPath,
  isfetching,
  Users,
  netError,
}) => {
  const router = useRouter();

  const currentUser = useAppSelector((state) => state.auth);
  return (
    <StyledConnect>
      {isfetching && (
        <SkeletonImage height="40px" width="100%" borderradius="10px" />
      )}
      {isfetching && (
        <SkeletonImage height="40px" width="100%" borderradius="10px" />
      )}
      {isfetching && (
        <SkeletonImage height="40px" width="100%" borderradius="10px" />
      )}
      {isfetching && (
        <SkeletonImage height="40px" width="100%" borderradius="10px" />
      )}
      {netError ? (
        <ServerDown />
      ) : (
        !isfetching &&
        Users.slice(0, 4).map((user, index) => (
          <ConnectUser user={user} key={index} />
        ))
      )}
      {isfetching ? (
        <SkeletonImage height="20px" width="50%" borderradius="5px" />
      ) : (
        <SeeMore
          onClick={() => router.push(pushPath)}
          className={poppinsNormal.className}
        >
          See more
        </SeeMore>
      )}
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
