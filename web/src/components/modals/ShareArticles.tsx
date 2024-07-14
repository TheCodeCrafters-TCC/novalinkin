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
import React, { useEffect, useRef, useState } from "react";
import { FaCode, FaFileCode, FaVideo } from "react-icons/fa6";
import { IoClose, IoImage } from "react-icons/io5";
import styled from "styled-components";
import ActionIcons from "./ActionIcons";
import { SelectionsWrapper } from "@/lib/styles/styled";
import { useArticleModal } from "@/context/useArticlesModal";
import SelectedImages from "./SelectedImages";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { shareArticle } from "@/redux/thunks/article";

const ShareArticles = () => {
  const { onClose } = useArticleModal();
  const imgRef = useRef<any>();
  const [images, setImages] = useState<any>([]);
  const [selectedTag, setSelectedTag] = useState("");
  const dispatch = useAppDispatch();
  const articleState = useAppSelector((state) => state.article);
  const userId = useAppSelector((state) => state.auth.userId);
  const isLoading = articleState.creating_status === "pending";
  const [form, setForm] = useState<any>({
    desc: "",
    tag: "",
    images: [],
  });

  useEffect(() => {
    if (selectedTag) {
      setForm({ ...form, tag: selectedTag });
    }
  }, [selectedTag]);

  console.log("images:", images);
  console.log("form:", form);
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImage = reader.result as string; // Cast result to string
        setImages((prevImages: any) => [...prevImages, newImage]);
        setForm((prevForm: any) => ({
          ...prevForm,
          images: [...prevForm.images, newImage],
        }));
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleRemoveImage = (index: any) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const descInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (descInputRef.current) {
      descInputRef.current.focus();
    }
  }, [form.desc]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    setForm({ ...form, desc: event.target.value });
  };

  function Submit() {
    dispatch(
      shareArticle({
        userId,
        image: form.images,
        desc: form.desc,
        tag: form.tag,
      })
    );
    setForm({ ...form, tag: "", desc: "", images: [] });
    setImages([]);
  }

  const DropShare = () => (
    <StyledShareContainer>
      <ContentHeader>
        <h1 className={poppinsSemibold.className}>Share Articles</h1>
        <IoClose size={35} onClick={onClose} />
      </ContentHeader>
      <ActionsWrap>
        <ActionInput
          className={poppins.className}
          placeholder="Write your article here..."
          onChange={handleInputChange}
          value={form.desc}
          ref={descInputRef}
        />
        <SelectionsWrapper>
          <ActionIcons onImageClick={() => imgRef.current.click()} />
          <Tags setSelectedTag={setSelectedTag} selectedTag={selectedTag} />
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
        <Button
          label="Share"
          variant="primary"
          radius="sm"
          width="auto"
          onActionClick={Submit}
          height="45px"
          disabled={isLoading || !form.desc}
          Loading={isLoading}
        />
      </ActionsWrap>
    </StyledShareContainer>
  );
  return (
    <Backdrop>
      <DropShare />
    </Backdrop>
  );
};

export default ShareArticles;
