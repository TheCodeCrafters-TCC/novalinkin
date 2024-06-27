import { N_Image, N_Wrapper } from "@/styles/components/styled";
import { colors, poppinsSemibold } from "@/styles/global";
import { UserProps } from "@/types";
import React from "react";
import { MdVerified } from "react-icons/md";

const N_ResultItem: React.FC<UserProps> = ({
  user: { name, isVerified, image },
}) => {
  return (
    <N_Wrapper>
      <N_Image src={image} alt={name} priority />
      <p className={poppinsSemibold.className}>{name}</p>
      {isVerified && <MdVerified size={20} color={colors.primaryColor} />}
    </N_Wrapper>
  );
};

export default N_ResultItem;
