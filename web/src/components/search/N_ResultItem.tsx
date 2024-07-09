import { N_Image, N_Wrapper } from "@/styles/components/styled";
import { colors, poppinsSemibold } from "@/styles/global";
import { UserProps } from "@/types";
import React from "react";
import { MdVerified } from "react-icons/md";
import { ProfileProps } from "../user/Profile";

const N_ResultItem: React.FC<ProfileProps> = ({ user }) => {
  const name = user?.firstName + " " + user?.lastName;
  return (
    <N_Wrapper>
      <N_Image
        width={55}
        height={55}
        src={user?.userProfile}
        alt={name}
        priority
      />
      <p className={poppinsSemibold.className}>{name}</p>
      {user?.isVerified && <MdVerified size={20} color={colors.primaryColor} />}
    </N_Wrapper>
  );
};

export default N_ResultItem;
