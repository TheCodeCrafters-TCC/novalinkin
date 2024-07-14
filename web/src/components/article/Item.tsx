import { colors, getDevice, poppins, poppinsNormal } from "@/styles/global";
import Image from "next/image";
import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import styled from "styled-components";
import ActionBar from "./ActionBar";
import { Divider } from "@/lib";
import Menu from "./Menu";
import { formatTimestamp } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Comments from "../modals/Comments";

export interface ArticleProps {
  article: ArticleType;
}

const Item = ({ article }: ArticleProps) => {
  const [fullImage, setFullImage]: any = useState(null);
  const [view, setView] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  function viewFullWidth(img: any) {
    setView(true);
    setFullImage(img?.url);
  }
  function openmenu(e: React.MouseEvent) {
    setOpenMenu(!openMenu);
    e.stopPropagation();
  }
  return (
    <ArticleItem onClick={() => setOpenMenu(false)}>
      <ArticleHeaderWrap>
        <ArticleHeader
          onClick={() => router.push(`/profile/${article.slugName}`)}
        >
          <ArticleUser
            width={45}
            height={45}
            src={article?.userProfile}
            alt="user"
            priority
          />
          <ArticleUserInfo>
            <p>{article.userName}</p>
            <span className={`__timestamp ${poppins.className}`}>
              {formatTimestamp(article.createdAt)}
            </span>
          </ArticleUserInfo>
          {article.isVerified && (
            <MdVerified size={18} color={colors.primaryColor} />
          )}
        </ArticleHeader>
        <HiDotsVertical size={20} onClick={openmenu} />
        {openMenu && <Menu setIsOpen={setOpenMenu} article={article} />}
      </ArticleHeaderWrap>
      <Divider />
      <ArticleWrap onClick={() => router.push(`/article/${article._id}`)}>
        <p className={poppinsNormal.className}>{article.desc}</p>
        {article.image && (
          <>
            <ImagesWrap>
              {article.image.map((img: any, index) => (
                <ArticleImg
                  className={
                    article.image.length < 2
                      ? "__full"
                      : index === 0
                      ? "first fit"
                      : "last fit"
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    viewFullWidth(img);
                  }}
                  src={img.url}
                  alt="Article"
                  key={index}
                />
              ))}
            </ImagesWrap>
          </>
        )}
        <ActionBar article={article} OpenComment={() => setOpenComment(true)} />
      </ArticleWrap>
      <Divider />
      {view && (
        <ImageView onClick={() => setView(false)}>
          <FullImg
            onClick={() => setView(false)}
            src={fullImage}
            alt="full-image"
          />
        </ImageView>
      )}
      {openComment && (
        <Comments article={article} onClose={() => setOpenComment(false)} />
      )}
    </ArticleItem>
  );
};

export default Item;
const ArticleItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
`;

const ImagesWrap = styled.div`
  display: flex;
  width: 100%;
  gap: 1px;
  justify-content: center;
  position: relative;
  height: 100%;

  .__full {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .fit {
    width: 100%;
    max-width: 250px;
    height: auto;
    flex: 1;
    object-fit: cover;
  }
  .first {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .last {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    cursor: pointer;
  }

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
    color: ${({ theme }) => theme.colors.timestamps};
    font-size: 12px;
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
  width: 100%;

  p {
    font-size: 14px;
    /* font-family: ${poppinsNormal.style}; */
  }
  &:hover {
    cursor: pointer;
  }
`;

const ArticleImg = styled.img`
  cursor: pointer;
`;
const FullImg = styled.img`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* border-radius: 9px; */

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
  background: ${({ theme }) => theme.colors.dropBg};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;

  svg {
    position: absolute;
    bottom: 3rem;
    z-index: 200;
    cursor: pointer;
  }
`;
