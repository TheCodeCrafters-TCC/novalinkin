import { Button } from "@/lib";
import {
  HeaderWrap,
  SelectedImage,
  StyledIconWrap,
  StyledImageWrapper,
  StyledShareTA,
  Styled_Share,
} from "@/styles/components/styled";
import { poppinsSemibold } from "@/styles/global";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { useRef, useState } from "react";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { FaArrowLeft, FaCameraRetro, FaVideo } from "react-icons/fa6";
import ToShareImages from "./ToShareImages";
import { useRouter } from "next/router";

const Share = () => {
  const [image, setImage] = useState<any>(null);
  const [images, setImages] = useState<any>([]);
  const imgRef = useRef<any>();
  const router = useRouter();

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files;
    if (file && file[0]) {
      const newImage = URL.createObjectURL(file[0]);
      setImage(newImage);
      console.log("image:", newImage);

      setImages((prevImages: any) => [...prevImages, newImage]);
      console.log("images:", [...images, newImage]);
    }
  }
  return (
    <Styled_Share>
      <HeaderWrap>
        <FaArrowLeft size={35} onClick={() => router.back()} />
        <h1 className={poppinsSemibold.className}>Share article</h1>
      </HeaderWrap>
      <StyledShareTA placeholder="What's on your mind today?" />
      <StyledIconWrap>
        <FaCameraRetro size={20} onClick={() => imgRef.current?.click()} />
        <FaVideo size={22} />
        <BsFileEarmarkCodeFill size={20} />
      </StyledIconWrap>
      <input
        type="file"
        onChange={handleImage}
        name=""
        hidden
        accept="image/png,image/jpg"
        id=""
        ref={imgRef}
      />
      <StyledImageWrapper>
        {images
          ?.map(
            (
              img: string | StaticImport,
              index: React.Key | null | undefined
            ) => <ToShareImages key={index} img={img} />
          )
          .slice(0, 5)}
        {images.length >= 6 && (
          <p className={poppinsSemibold.className}>+{images.length}</p>
        )}
      </StyledImageWrapper>

      <Button label="Share" width="100%" radius="md" variant="primary" />
    </Styled_Share>
  );
};

export default Share;
