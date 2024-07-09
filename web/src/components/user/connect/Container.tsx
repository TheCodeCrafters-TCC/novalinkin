// import { Users } from "@/constants/user";
import {
  ContentWrapper,
  FeedWrapper,
  StyledConnectWrap,
} from "@/styles/components/styled";
import { colors, getDevice, inter, poppins } from "@/styles/global";
import React, { startTransition, useEffect, useState } from "react";
import styled from "styled-components";
import User from "./User";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa6";
import { Empty, NetworkDown, NoData, Not_Found_404, NotIcon } from "@/lib";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import Request from "./Request";
import RequestBuffer from "@/components/skeleton/RequestBuffer";
import { getUserRequests } from "@/redux/thunks/user";
import { getUserById } from "@/helper/get";

interface ContainerProps {
  header: string;
  hasNavBack?: boolean;
}

const Container: React.FC<ContainerProps> = ({ hasNavBack, header }) => {
  const router = useRouter();
  const { query }: any = router.query;
  const { requests } = router.query;
  const [notFound, setNotFound] = useState(false);
  const stateQuery = useAppSelector((state) => state.system.query.profileSlug);
  const Users = useAppSelector((state) => state.user.users);
  const profilePage = router.pathname === "/profile/[slug]/connections";
  const reqState = useAppSelector((state) => state.user);
  const isfetching = reqState.fetching_req_status === "pending";
  const totalReq = reqState.connect_req?.length;
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState([]);
  const ReqUser = users;
  const netError = reqState.fetching_status === "failed";
  const netErr = reqState.fetching_req_status === "failed";

  useEffect(() => {
    const getReqUsers = async () => {
      const data = await Promise.all(
        reqState.connect_req.map(
          async (req) => await getUserById(req.connectionRequest)
        )
      );
      setUsers(data as any);
    };
    getReqUsers();
  }, [users]);

  // useEffect(() => {
  //   if (requests) {
  //     setRequest(true);
  //   } else {
  //     setRequest(false);
  //   }
  // }, [requests]);

  const interStyles = {
    display: profilePage ? "none" : "flex",
  };

  const MapUsers = query
    ? Users.filter((user) => {
        const name = user.firstName + user.lastName;
        return name.toLowerCase().includes(query);
      })
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
  const [all, setAll] = useState(true);
  const [request, setRequest] = useState(false);

  useEffect(() => {
    dispatch(getUserRequests(user.userId));
  }, []);

  function getAll() {
    setRequest(false);
    setAll(true);
    // router.push("/connect");
  }
  function getRequest() {
    startTransition(() => {
      setAll(false);
      setRequest(true);
      // router.push("/connect?requests=true");
    });
  }

  return (
    <ContentWrapper className="__profile_page">
      <ConnectHeader>
        {hasNavBack && (
          <FaArrowLeft
            size={35}
            onClick={() => router.replace(`/profile/${stateQuery}`)}
          />
        )}
        <h1 className={poppins.className}>{header}</h1>
      </ConnectHeader>
      <InteractionHeader style={interStyles} className={poppins.className}>
        <p className={all ? "__active" : ""} onClick={getAll}>
          All
        </p>
        <ReqWrap>
          <NotIcon label={totalReq} style={{ left: "60%", top: 15 }} />
          <p className={request ? "__active" : ""} onClick={getRequest}>
            Request
          </p>
        </ReqWrap>
      </InteractionHeader>
      {all && (
        <StyledConnectWrap>
          {netError ? (
            <NetworkDown />
          ) : notFound ? (
            <Not_Found_404 style={{ height: "70vh" }} />
          ) : (
            MapUsers?.filter((u) => u._id !== user.userId).map(
              (user, index) => <User key={index} user={user} />
            )
          )}
        </StyledConnectWrap>
      )}
      {request && (
        <StyledConnectWrap>
          {netErr ? (
            <NetworkDown />
          ) : totalReq < 1 && !isfetching ? (
            <Empty label="You have no connection request!" />
          ) : (
            ReqUser?.map((user, index) => <Request user={user} key={index} />)
          )}
          {isfetching && ReqUser.length < 1 && (
            <>
              <RequestBuffer />
              <RequestBuffer />
              <RequestBuffer />
              <RequestBuffer />
            </>
          )}
        </StyledConnectWrap>
      )}
    </ContentWrapper>
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

    @media screen and (max-width: ${getDevice("md")}) {
      display: none;
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

const InteractionHeader = styled.div`
  /* display: flex; */
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
  width: 100%;
  justify-content: space-between;

  p {
    padding: 1rem;
    width: 100%;
    text-align: center;
    font-size: 15px;

    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.icon};
    }
  }

  .__active {
    border-bottom: 3px solid ${colors.primaryColor};
  }
`;

const ReqWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
