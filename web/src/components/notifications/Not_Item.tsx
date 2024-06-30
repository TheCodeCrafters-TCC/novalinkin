import {
  SpaceBetween,
  colors,
  getDevice,
  poppins,
  poppinsNormal,
} from "@/styles/global";
import { NotificationProps } from "@/types";
import Image from "next/image";
import React from "react";
import { BsReplyFill } from "react-icons/bs";
import { CgComment } from "react-icons/cg";
import { IoMdHeart } from "react-icons/io";
import styled from "styled-components";

const Not_Item: React.FC<NotificationProps> = ({
  not_i: { notifyType, body, header, Images, objectId, reactId, ownerId },
}) => {
  const getIcons = () => {
    if (notifyType === "like") {
      return <IoMdHeart size={25} color={colors.primaryRed} />;
    } else if (notifyType === "comment") {
      return <CgComment size={25} color={colors.primaryColor} />;
    } else if (notifyType === "reply") {
      return <BsReplyFill size={25} />;
    }
  };

  const currentWidth = global?.window?.innerWidth;
  const xlTruncate = header.length > 20 ? header.slice(0, 20) + "..." : header;
  const mdTruncate = header.length > 6 ? header.slice(0, 6) + "..." : header;
  const truncateBody = body.length > 80 ? body.slice(0, 80) + "..." : body;
  const truncateHeader = currentWidth <= 450 ? mdTruncate : xlTruncate;

  return (
    <Container>
      {getIcons()}
      <SecondLayer>
        <LayerOne>
          <ImagesWrap>
            {Images.map((img, index) => (
              <Not_Image src={img} key={index} alt="Users" priority />
            ))}
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
  width: 85%;
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
  margin-right: -1rem;

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
