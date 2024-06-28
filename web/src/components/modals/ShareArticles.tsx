import { Backdrop, Button, Divider, Tags, Title } from "@/lib";
import {
  ActionInput,
  ActionsWrap,
  ContentHeader,
  IconsWrap,
  ITWrap,
  Styled_Article,
  StyledShareContainer,
} from "@/styles/components/styled";
import { SpaceBetween, poppins, poppinsSemibold } from "@/styles/global";
import React, { useRef, useState } from "react";
import { FaCode, FaFileCode, FaVideo } from "react-icons/fa6";
import { IoClose, IoImage } from "react-icons/io5";
import styled from "styled-components";
import ActionIcons from "./ActionIcons";
import { SelectionsWrapper } from "@/lib/styles/styled";
import { useArticleModal } from "@/context/useArticlesModal";
import SelectedImages from "./SelectedImages";

const ShareArticles = () => {
  const { onClose } = useArticleModal();
  const imgRef = useRef<any>();
  const [images, setImages] = useState<any>([]);
  const [form, setForm] = useState({
    desc: "",
    tag: "",
    images: [],
  });

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (files && files[0]) {
      const newImage = URL.createObjectURL(files[0]);
      setImages((prev: any) => [...prev, newImage]);
      console.log("images:", images);
    }
  }

  const handleRemoveImage = (index: any) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const dropShare = (
    <StyledShareContainer>
      <ContentHeader>
        <h1 className={poppinsSemibold.className}>Share Articles</h1>
        <IoClose size={35} onClick={onClose} />
      </ContentHeader>
      <ActionsWrap>
        <ActionInput
          className={poppins.className}
          placeholder="Write your article here..."
        />
        <SelectionsWrapper>
          <ActionIcons onImageClick={() => imgRef.current.click()} />
          <Tags />
        </SelectionsWrapper>
        <Divider />
        <input
          type="file"
          accept="image/png,image/jpg"
          hidden
          ref={imgRef}
          onChange={handleImage}
        />
        <SelectedImages onClick={handleRemoveImage} images={images} />
        <Divider />
        <Button label="Share" variant="primary" radius="sm" width="auto" />
      </ActionsWrap>
    </StyledShareContainer>
  );
  return <Backdrop children={dropShare} />;
};

export default ShareArticles;
