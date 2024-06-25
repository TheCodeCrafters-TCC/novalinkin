import { Users } from "@/constants/user";
import { FeedWrapper, StyledConnectWrap } from "@/styles/components/styled";
import { getDevice, inter, poppins } from "@/styles/global";
import React, { startTransition, useEffect, useState } from "react";
import styled from "styled-components";
import User from "./User";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa6";
import { NoData, Not_Found_404 } from "@/lib";
import { useAppSelector } from "@/hooks/state";

interface ContainerProps {
  header: string;
  hasNavBack?: boolean;
}

const Container: React.FC<ContainerProps> = ({ hasNavBack, header }) => {
  const router = useRouter();
  const { query }: any = router.query;
  const [notFound, setNotFound] = useState(true);
  const stateQuery = useAppSelector((state) => state.system.query.profileSlug);

  const MapUsers = query
    ? Users.filter((user) => user.name.toLowerCase().includes(query))
    : Users;

  useEffect(() => {
    startTransition(() => {
      if (query && MapUsers.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    });
  }, [query, MapUsers.length]);

  return (
    <FeedWrapper className="__profile_page">
      <ConnectHeader>
        {hasNavBack && (
          <FaArrowLeft
            size={35}
            onClick={() => router.replace(`/profile/${stateQuery}`)}
          />
        )}
        <h1 className={poppins.className}>{header}</h1>
      </ConnectHeader>
      <StyledConnectWrap>
        {notFound ? (
          <Not_Found_404 style={{ height: "70vh" }} />
        ) : (
          MapUsers?.map((user, index) => <User key={index} user={user} />)
        )}
      </StyledConnectWrap>
    </FeedWrapper>
  );
};

export default Container;

const ConnectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
  width: 100%;
  padding: 1rem;

  svg {
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    &:hover {
      background: ${({ theme }) => theme.colors.icon};
    }
  }

  h1 {
    font-size: 25px;
  }

  @media screen and (max-width: ${getDevice("md")}) {
    margin-top: 11px;
    h1 {
      font-size: 22px;
    }
  }
`;
