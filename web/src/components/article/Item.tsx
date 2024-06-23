import { colors, getDevice, inter, poppinsNormal } from "@/styles/global";
import Image from "next/image";
import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import styled from "styled-components";
import ActionBar from "./ActionBar";
import { Divider } from "@/lib";
import { FiDownload } from "react-icons/fi";
import { handleDownload } from "@/lib/hooks";
import Menu from "./Menu";

const Item = ({ article }: any) => {
  const [fullImage, setFullImage]: any = useState(null);
  const [view, setView] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  function viewFullWidth() {
    setView(true);
    setFullImage(article.image);
  }
  function openmenu(e: React.MouseEvent) {
    setOpenMenu(true);
    e.stopPropagation();
  }
  return (
    <ArticleItem onClick={() => setOpenMenu(false)}>
      <ArticleHeaderWrap>
        <ArticleHeader>
          <ArticleUser src={article.profile} alt="user" priority />
          <ArticleUserInfo>
            <p>{article.userName}</p>
            <span className="__timestamp">{article.created}</span>
          </ArticleUserInfo>
          {article.isVerified && (
            <MdVerified size={18} color={colors.primaryColor} />
          )}
        </ArticleHeader>
        <HiDotsVertical size={20} onClick={openmenu} />
        {openMenu && <Menu article={article} />}
      </ArticleHeaderWrap>
      <Divider />
      <ArticleWrap>
        <p className={poppinsNormal.className}>{article.desc}</p>
        {article.image && (
          <ArticleImg
            onClick={viewFullWidth}
            priority
            src={article.image}
            alt="user"
          />
        )}
        <ActionBar article={article} />
      </ArticleWrap>
      <Divider />
      {view && (
        <ImageView>
          <FullImg
            onClick={() => setView(false)}
            src={fullImage}
            alt="full-image"
            priority
          />
          <FiDownload
            size={30}
            color="white"
            onClick={() => handleDownload(fullImage?.src)}
          />
        </ImageView>
      )}
    </ArticleItem>
  );
};

export default Item;
const ArticleItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    transform: translateY(-7px);
  }
`;

const ArticleUser = styled(Image)`
  width: 45px;
  height: 45px;
  border-radius: 9999px;
`;

export const ArticleUserInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${colors.primaryGray};
    font-size: 11px;
  }
`;

const ArticleHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 13px;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;

const ArticleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.1rem;

  p {
    font-size: 14px;
    /* font-family: ${poppinsNormal.style}; */
  }
`;

const ArticleImg = styled(Image)`
  width: 99%;
  height: 250px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  cursor: pointer;
`;
const FullImg = styled(Image)`
  width: 50%;
  height: 58%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 9px;

  @media screen and (max-width: ${getDevice("md")}) {
    width: 100%;
    height: 230px;
  }
`;

const ImageView = styled.div`
  background: ${colors.dropBg};
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 190;
  left: 0;
  top: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    bottom: 3rem;
    z-index: 200;
    cursor: pointer;
  }
`;
