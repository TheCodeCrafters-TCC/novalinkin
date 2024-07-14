import { getDevice } from "@/styles/global";
import React from "react";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";

interface ImageProps {
  images: any[];
  onClick?: () => void;
  srcWithUrl?: boolean;
  hasRemove?: boolean;
  inModel?: boolean;
  removeAction?: (index?: any) => void;
}

const ImageContainer = ({
  images,
  onClick,
  srcWithUrl,
  inModel,
  removeAction,
}: ImageProps) => {
  return (
    <ImagesWrap>
      {images.map((img: any, index) => (
        <FlexItem
          key={index}
          className={inModel && images.length < 2 ? "__full_m" : ""}
        >
          <IoClose size={35} className="close" onClick={removeAction} />
          <ArticleImg
            //   className={images.length < 2? "__full": index === 0? "first fit": "last fit"}
            className={
              images.length < 2
                ? "__full"
                : inModel
                ? index === 0
                  ? "first m_fit"
                  : "last m_fit"
                : index === 0
                ? "first fit"
                : "last fit"
            }
            src={srcWithUrl ? img.url : img}
            alt="Article"
            key={index}
          />
        </FlexItem>
      ))}
    </ImagesWrap>
  );
};

export default ImageContainer;

const ImagesWrap = styled.div`
  display: flex;
  width: 100%;
  gap: 1px;
  justify-content: center;
  position: relative;
  height: 100%;
  flex: 1;

  .__full {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .__full_m {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 1rem;
  }
  .fit {
    width: 100%;
    max-width: 250px;
    height: auto;
    flex: 1;
    object-fit: cover;
  }
  .m_fit {
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

  @media screen and (max-width: ${getDevice("lg")}) {
    .m_fit {
      width: 200px;
    }
  }
  @media screen and (max-width: ${getDevice("md")}) {
    .m_fit {
      width: 150px;
    }
  }
`;

const ArticleImg = styled.img`
  cursor: pointer;
`;

const FlexItem = styled.div`
  position: relative;
  /* flex-direction: column; */
  display: flex;
  width: 100%;

  svg {
    padding: 5px;
    border-bottom-right-radius: 4px;
    border-top-left-radius: 4px;
    background: ${({ theme }) => theme.colors.icon};
    position: absolute;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;
