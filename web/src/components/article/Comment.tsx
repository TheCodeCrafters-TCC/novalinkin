import { colors, getDevice, poppins, poppinsNormal } from "@/styles/global";
import Image from "next/image";
import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import styled from "styled-components";
import { Divider } from "@/lib";
import { formatTimestamp } from "@/lib/utils";
import { useRouter } from "next/router";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { likeComment } from "@/redux/thunks/article";

interface CommentProps {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProps) => {
  const [fullImage, setFullImage]: any = useState(null);
  const [view, setView] = useState(false);
  const router = useRouter();
  const userId = useAppSelector((state) => state.auth.userId);
  const hasLiked = comment.likes.includes(userId);
  const dispatch = useAppDispatch();
  function like() {
    dispatch(likeComment({ userId, commentId: comment._id }));
  }
  function viewFullWidth(img: any) {
    setView(true);
    setFullImage(img?.url);
  }

  return (
    <ArticleItem>
      <ArticleHeaderWrap>
        <ArticleHeader
          onClick={() => router.push(`/profile/${comment.slugName}`)}
        >
          <ArticleUser
            width={45}
            height={45}
            src={comment?.userProfile}
            alt="user"
            priority
          />
          <ArticleUserInfo>
            <p>{comment.userName}</p>
            <span className={`__timestamp ${poppins.className}`}>
              {formatTimestamp(comment.createdAt)}
            </span>
          </ArticleUserInfo>
          {comment.isVerified && (
            <MdVerified size={18} color={colors.primaryColor} />
          )}
        </ArticleHeader>
        <HiDotsVertical size={20} />
      </ArticleHeaderWrap>
      <Divider />
      <ArticleWrap>
        <p className={poppinsNormal.className}>{comment.desc}</p>
        {comment.image && (
          <>
            <ImagesWrap>
              {comment.image.map((img: any, index) => (
                <ArticleImg
                  className={
                    comment.image.length < 2
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
        <StyledClick onClick={like}>
          {hasLiked ? <IoMdHeart size={18} /> : <IoMdHeartEmpty size={18} />}
          <p>{comment.likes.length}</p>
        </StyledClick>
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
    </ArticleItem>
  );
};

export default Comment;
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
  z-index: 200;
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

const StyledClick = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: ${colors.primaryRed};
  padding: 5px;
  margin-left: 16px;

  &:hover {
    cursor: pointer;
  }
  p {
    font-size: 11px;
  }
`;
