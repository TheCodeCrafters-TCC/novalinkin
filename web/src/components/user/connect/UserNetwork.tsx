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
import { getUserRequests, sendConnectionReq } from "@/redux/thunks/user";
import { getCurrentReq, getUserById } from "@/helper/get";
import { RequestProps, UserTProps } from "@/types";
import { connectMsg } from "@/constants/system";

interface ContainerProps {
  header: string;
  hasNavBack?: boolean;
}

const UserNetwork: React.FC<ContainerProps> = ({ hasNavBack, header }) => {
  const router = useRouter();
  const { query }: any = router.query;
  const [notFound, setNotFound] = useState(false);
  const stateQuery = useAppSelector((state) => state.system.query.profileSlug);
  const Users = useAppSelector((state) => state.user);
  const reqState = useAppSelector((state) => state.user);
  const currentUser = Users.currentUser;
  const Name = currentUser.firstName + " " + currentUser.lastName;
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const netError = reqState.fetching_status === "failed";
  const netErr = reqState.fetching_req_status === "failed";
  const [users, setUsers] = useState([]);
  const isEmpty = users.length < 1;
  const isOwner = currentUser._id === user.userId;
  const [request, setRequest] = useState<RequestProps>();

  const receiverId = currentUser._id;
  const connectionRequest = user.userId;

  useEffect(() => {
    const fetchReq = async () => {
      const response = await getCurrentReq({ receiverId, connectionRequest });
      setRequest(response);
    };
    fetchReq();
  }, [request]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await Promise.all(
        Users.currentUser?.connections.map(async (id) => await getUserById(id))
      );
      setUsers(response as any);
    };
    getUsers();
  }, []);

  const MapUsers = query
    ? users.filter((user: UserTProps) => {
        const name = user.firstName + user.lastName;
        return name.toLowerCase().includes(query);
      })
    : users;

  useEffect(() => {
    startTransition(() => {
      if (query && MapUsers.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    });
  }, [query, MapUsers.length]);

  function ClickAction() {
    if (isOwner) {
      router.push("/connect");
    } else {
      dispatch(sendConnectionReq({ connectionRequest, receiverId }));
    }
  }

  const getStatus = () => {
    if (request?.status === "Pending") {
      return "Pending";
    } else if (request?.status === "Declined" || !request?.status) {
      return "Connect now";
    }
  };

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

      <StyledConnectWrap>
        {netError ? (
          <NetworkDown />
        ) : isEmpty ? (
          <Empty
            header={isOwner ? connectMsg.ownerHeader : connectMsg.visitorHeader}
            label={isOwner ? connectMsg.ownerText : connectMsg.visitorText}
            clickAble
            clickLabel={isOwner ? "Find People" : getStatus()}
            clickAction={ClickAction}
            disbaleClick={request?.status === "Pending"}
          />
        ) : notFound ? (
          <Not_Found_404 style={{ height: "70vh" }} />
        ) : (
          MapUsers?.map((user, index) => <User key={index} user={user} />)
        )}
      </StyledConnectWrap>
    </ContentWrapper>
  );
};

export default UserNetwork;

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
