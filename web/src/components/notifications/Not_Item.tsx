import { useAppDispatch, useAppSelector } from "@/hooks/state";
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
    }
  };

  const currentWidth = global?.window?.innerWidth;
  const xlTruncate = header.length > 38 ? header.slice(0, 38) + "..." : header;
  const mdTruncate = header.length > 33 ? header.slice(0, 33) + "..." : header;
  const truncateBody = body.length > 80 ? body.slice(0, 80) + "..." : body;
  const truncateHeader = currentWidth <= 450 ? mdTruncate : xlTruncate;
  const currentTheme = useAppSelector((state) => state.system.theme);
  const bg = currentTheme === "light" ? "#f0f8ff" : colors.neutral600;
  const userId = useAppSelector((state) => state.auth.userId);
  const dispatch = useAppDispatch();

  const notStyles = {
    background: !seen ? bg : "",
  };

  const router = useRouter();

  function handlePush() {
    if (slugName && notifyType !== "connect") {
      router.push(`/profile/${slugName}`);
    } else if (notifyType === "connect") {
      router.push("/connect");
    }
    dispatch(readNotification({ userId, notificationId: _id }));
  }

  return (
    <Container style={notStyles} onClick={handlePush}>
      {getIcons()}
      <SecondLayer>
        <LayerOne>
          <ImagesWrap>
            <Not_Image
              src={Image}
              width={45}
              height={45}
              alt="Users"
              priority
            />
          </ImagesWrap>
          <p className={`${poppins.className} __header`}>{truncateHeader}</p>
        </LayerOne>
        <p className={`__body ${poppinsNormal.className}`}>{truncateBody}</p>
      </SecondLayer>
    </Container>
  );
};

export default Not_Item;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
  width: 100%;
  padding: 2rem;
  gap: 1rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${getDevice("md")}) {
    padding: 1rem;
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
  width: 90%;
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

const ImagesWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 0;
`;
