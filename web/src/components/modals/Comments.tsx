import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { Backdrop, Button } from "@/lib";
import { formatTimestamp } from "@/lib/utils";
import {
  commentOnArticle,
  commentOnCurrentArticle,
} from "@/redux/thunks/article";
import {
  ContentHeader,
  StyledShareContainer,
} from "@/styles/components/styled";
import {
  colors,
  getDevice,
  poppins,
  poppinsNormal,
  poppinsSemibold,
  SpaceBetween,
} from "@/styles/global";
import React, { useRef, useState } from "react";
import { IoClose, IoImageOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import styled from "styled-components";
import ImageContainer from "../ImageContainer";
import { onToast } from "@/lib/components/ToastContainer";
import { useRouter } from "next/router";

interface CommentAProps {
  article: ArticleType;
  onClose: any;
}

const Comments = ({ article, onClose }: CommentAProps) => {
  const auth = useAppSelector((state) => state.auth);
  const [desc, setDesc] = useState<any>("");
  const articleState = useAppSelector((state) => state.article);
  const imgRef = useRef<HTMLInputElement | any>(null);
  const dispatch = useAppDispatch();
  const isLoading =
    articleState.comment_status === "pending" ||
    articleState.comment_current_status === "pending";
  const articleId = article._id;
  const userId = auth.userId;
  const [images, setImages] = useState<any>([]);
  const router = useRouter();
  const isCurrent = router.pathname === "/article/[articleId]";

  function comment() {
    if (isCurrent) {
      dispatch(
        commentOnCurrentArticle({ userId, articleId, desc, image: images })
      );
      setDesc("");
    } else {
      dispatch(commentOnArticle({ userId, articleId, desc, image: images }));
      setDesc("");
    }
  }

  const handleRemoveImage = (index: any) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = reader.result;
        if (images.length < 1) {
          setImages((prevImage: any) => [...prevImage, newImage]);
        } else {
          onToast("info", "You can only upload two");
        }
      };
      reader.readAsDataURL(files[0]);
    }
  }

  const CommentAction = () => (
    <StyledShareContainer onClick={(e) => e.stopPropagation()}>
      <ContentHeader>
        <h1 className={poppinsSemibold.className}>Write comment</h1>
        <IoClose size={35} onClick={onClose} />
      </ContentHeader>
      <ActionWrapper>
        <Wrapper>
          <DetailsSection>
            <ImageLayer>
              <UserImage src={article.userProfile} alt="User" />
              <ImageDivider />
              <UserImage src={auth.userProfile} alt="User" />
            </ImageLayer>
            <DetailsWrap>
              <InfoWrap>
                <p>{article.userName}</p>
                {article.isVerified && <MdVerified size={20} />}
              </InfoWrap>
              <p className="__time">{formatTimestamp(article.createdAt)}</p>
              <p className={`${poppinsNormal.className} __desc`}>
                {article.desc}
              </p>
              <CommentInput
                type="text"
                placeholder="What your comment"
                value={desc}
                className={poppins.className}
                onChange={(e) => setDesc(e.target.value)}
                autoFocus
              />
            </DetailsWrap>
          </DetailsSection>
          {images.length >= 1 && (
            <ImageContainer
              images={images}
              inModel
              removeAction={handleRemoveImage}
            />
          )}
        </Wrapper>
        <SpaceBetween className="_actions">
          <IoImageOutline size={25} onClick={() => imgRef.current.click()} />
          <input
            type="file"
            accept="image/png, image/jpeg"
            hidden
            ref={imgRef}
            onChange={handleImage}
          />
          <Button
            label="Comment"
            variant="primary"
            radius="sm"
            width="120px"
            height="35px"
            disabled={isLoading || !desc}
            Loading={isLoading}
            onActionClick={comment}
          />
        </SpaceBetween>
      </ActionWrapper>
    </StyledShareContainer>
  );
  return (
    <Backdrop onClose={onClose}>
      <CommentAction />
    </Backdrop>
  );
};

export default Comments;

const ActionWrapper = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  position: relative;

  ._actions {
    margin-top: 25px;

    svg {
      color: ${colors.primaryColor};
      cursor: pointer;
    }
  }
`;
const DetailsSection = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;
const ImageLayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 5px solid ${({ theme }) => theme.colors.divider};
`;

const ImageDivider = styled.div`
  background: ${({ theme }) => theme.colors.nav};
  height: 38px;
  width: 3px;
`;

const DetailsWrap = styled.div`
  display: flex;
  flex-direction: column;

  .__time {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.timestamps};
  }
  .__desc {
    margin-top: 5px;
    width: 350px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: ${getDevice("lg")}) {
    .__desc {
      width: 280px;
    }
  }
`;

const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  svg {
    color: ${colors.primaryColor};
  }
`;

const CommentInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  margin-top: 5px;
  padding: 1rem;
  border-radius: 9px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};

  ::placeholder {
    color: ${colors.primaryGray};
  }
  &:focus {
    caret-color: ${colors.primaryColor};
  }
`;

const Wrapper = styled.div`
  max-height: 400px;
  overflow-y: auto;
  width: 100%;

  &:nth-child(2) {
    padding: 4rem;
  }
`;
