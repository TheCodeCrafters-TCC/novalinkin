import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ImageUploaderProp } from "../types";
import {
  ClickToUploadWrap,
  SelectedImage,
  StyledUploader,
} from "../styles/styled";
import { GrGallery } from "react-icons/gr";
import { colors, poppins, poppinsSemibold } from "@/styles/global";
import { IoCloudUploadSharp, IoImage } from "react-icons/io5";
import Button from "./Button";

const ImageUploader = ({
  setImage,
  image,
  buttonDisable,
  buttonLabel,
  hasButton,
  buttonLoader,
  ButtonAction,
}: ImageUploaderProp) => {
  const onDrop = useCallback(async (acceptedFiles: any) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const binaryStr = reader.result as string;
        setImage(binaryStr);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/png": [], "image/jpeg": [] },
  });

  return (
    <StyledUploader {...getRootProps()}>
      <input {...getInputProps()} />
      {image ? (
        <>
          <SelectedImage
            src={image}
            priority
            width={110}
            height={110}
            alt="Selected Image"
          />
          {hasButton && (
            <Button
              label={buttonLabel}
              Loading={buttonLoader}
              disabled={buttonDisable}
              onActionClick={ButtonAction}
              variant="primary"
              radius="sm"
              width="100%"
            />
          )}
        </>
      ) : (
        <>
          <IoCloudUploadSharp
            color={colors.green500}
            className="__svg_upload"
            size={35}
          />
          <ClickToUploadWrap>
            <p className={`${poppinsSemibold.className} __upload__click`}>
              Click to upload
            </p>
            <p className={poppinsSemibold.className}>
              SVG, PNG, JPEG (max 800x400)
            </p>
          </ClickToUploadWrap>
        </>
      )}
    </StyledUploader>
  );
};

export default ImageUploader;
