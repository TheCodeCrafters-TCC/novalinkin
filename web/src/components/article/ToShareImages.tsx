import { SelectedImage } from "@/styles/components/styled";
import React from "react";

const ToShareImages = ({ img }: any) => {
  return <SelectedImage src={img} width={80} height={80} alt="Image" />;
};

export default ToShareImages;
