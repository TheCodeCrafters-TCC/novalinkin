import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { formatTimestamp } from "@/lib/utils";
import { readNotification } from "@/redux/thunks/notifications";
import {
  SpaceBetween,
  colors,
  getDevice,
  poppins,
  poppinsNormal,
} from "@/styles/global";
import { NotificationProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BsReplyFill } from "react-icons/bs";
import { CgComment } from "react-icons/cg";
import { IoMdHeart } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";
import styled from "styled-components";

const Not_Item: React.FC<NotificationProps> = ({
  not_i: {
    notifyType,
    body,
    header,
    Image,
    objectId,
    reactId,
    ownerId,
    seen,
    slugName,
    _id,
    createdAt,
  },
}) => {
  const getIcons = () => {
    if (notifyType === "like") {
      return <IoMdHeart size={25} color={colors.primaryRed} />;
    } else if (notifyType === "comment") {
      return <CgComment size={25} color={colors.primaryColor} />;
    } else if (notifyType === "reply") {
      return <BsReplyFill size={25} />;
    } else if (notifyType === "connect") {
      return <MdConnectWithoutContact size={25} color={colors.primaryColor} />;
    } else if (notifyType === "community-request") {
      return <IoPeople size={25} />;
    }
  };

  const currentWidth = global?.window?.innerWidth;
  const xlTruncate = header.length > 70 ? header.slice(0, 70) + "..." : header;
  const mdTruncate = header.length > 60 ? header.slice(0, 60) + "..." : header;
  const truncateBody = body.length > 88 ? body.slice(0, 88) + "..." : body;
  const truncateHeader = currentWidth <= 450 ? mdTruncate : xlTruncate;
  const currentTheme = useAppSelector((state) => state.system.theme);
  const bg = currentTheme === "light" ? "#f0f8ff" : "rgb(100, 116, 139,0.3)";
  const userId = useAppSelector((state) => state.auth.userId);
  const dispatch = useAppDispatch();

  const notStyles = {
    background: !seen ? bg : "",
  };

  const router = useRouter();

  function handlePush() {
    if (notifyType === "connected") {
      router.push(`/profile/${slugName}`);
    } else if (notifyType === "connect") {
      router.push(`/profile/${slugName}`);
    } else if (notifyType === "community-request") {
      router.push(`/community/${slugName}`);
    }
    dispatch(readNotification({ userId, notificationId: _id }));
  }

  return (
    <Container style={{ ...notStyles }} onClick={handlePush}>
      {/* {getIcons()} */}
      <ContentWrapper>
        <SpaceBetween>
          <Not_Image src={Image} width={45} height={45} alt="Users" priority />
          <p className={`${poppins.className} __time`}>
            {formatTimestamp(createdAt)}
          </p>
        </SpaceBetween>
        <SecondLayer>
          <LayerOne>
            {/* <p className={`${poppins.className} __header`}>{truncateHeader}</p> */}
            <p
              dangerouslySetInnerHTML={{ __html: truncateHeader }}
              className={`${poppinsNormal.className} __header`}
            />
          </LayerOne>
          {/* <p className={`__body ${poppinsNormal.className}`}>{truncateBody}</p> */}
          <p
            className={`__body ${poppinsNormal.className}`}
            dangerouslySetInnerHTML={{ __html: truncateBody }}
          />
        </SecondLayer>
      </ContentWrapper>
    </Container>
  );
};

export default Not_Item;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
  padding-left: 2rem;

  @media screen and (max-width: ${getDevice("md")}) {
    padding: 1rem;
  }

  &:hover {
    cursor: pointer;
  }

  .__time {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.timestamps};
  }
`;

const LayerOne = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SecondLayer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  user-select: none;

  .__header {
    font-size: 18px;
  }

  @media screen and (max-width: ${getDevice("md")}) {
    .__header {
      font-size: 16px;
    }
    .__body {
      font-size: 14px;
    }
  }
`;

const Not_Image = styled(Image)`
  width: 45px;
  height: 45px;
  border-radius: 9999px;

  @media screen and (max-width: ${getDevice("md")}) {
    margin-right: -1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;
  width: 100%;
`;
