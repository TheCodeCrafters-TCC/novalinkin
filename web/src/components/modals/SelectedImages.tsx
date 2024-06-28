import { StyledImageWrapper } from "@/styles/components/styled";
import { poppinsSemibold } from "@/styles/global";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import ToShareImages from "../article/ToShareImages";
import { IoClose } from "react-icons/io5";

interface SImageProps {
  onClick: (index: any) => void;
  images: Array<any>;
}

const SelectedImages: React.FC<SImageProps> = ({ images, onClick }) => {
  return (
    <StyledImageWrapper>
      {images
        ?.map(
          (img: string | StaticImport, index: React.Key | null | undefined) => (
            <div>
              <IoClose size={30} onClick={() => onClick(index)} />
              <ToShareImages key={index} img={img} />
            </div>
          )
        )
        .slice(0, 5)}
      {images.length >= 6 && (
        <p className={poppinsSemibold.className}>+{images.length - 5}</p>
      )}
    </StyledImageWrapper>
  );
};

export default SelectedImages;
