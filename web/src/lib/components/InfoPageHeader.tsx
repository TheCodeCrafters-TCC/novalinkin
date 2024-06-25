import React from "react";
import { InfoHeader } from "../styles/styled";
import { IoSearch } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/router";
import { VscSettings } from "react-icons/vsc";
import styled from "styled-components";
import { poppins, poppinsSemibold } from "@/styles/global";

interface HeaderProps {
  filter: boolean;
  label?: string;
}

const InfoPageHeader: React.FC<HeaderProps> = ({ filter, label }) => {
  const router = useRouter();
  const isUser = true;
  return (
    <InfoHeader>
      <Wrap>
        <FaArrowLeft size={25} onClick={router.back} />
        {label && <p className={poppinsSemibold.className}>{label}</p>}
      </Wrap>
      <AsycnAction>
        <IoSearch size={25} />
        {filter && isUser && <VscSettings size={25} />}
      </AsycnAction>
    </InfoHeader>
  );
};

export default InfoPageHeader;

const AsycnAction = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  p {
    font-size: 17px;
  }
`;
