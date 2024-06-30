import React from "react";
import { InfoHeader } from "../styles/styled";
import { IoSearch } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/router";
import { VscSettings } from "react-icons/vsc";
import styled from "styled-components";
import { poppinsSemibold } from "@/styles/global";
import { useMobileSearch } from "@/context/useMobileSearch";
import { IoMdAdd } from "react-icons/io";

interface HeaderProps {
  filter?: boolean;
  label?: string | any;
  hasAdd?: boolean;
  addActionClick?: () => void;
}

const InfoPageHeader: React.FC<HeaderProps> = ({
  filter,
  label,
  hasAdd,
  addActionClick,
}) => {
  const router = useRouter();
  const { Onsearch } = useMobileSearch();
  const isUser = true;

  return (
    <InfoHeader>
      <Wrap>
        <FaArrowLeft size={25} onClick={router.back} />
        {label && <p className={poppinsSemibold.className}>{label}</p>}
      </Wrap>
      <AsycnAction>
        <IoSearch size={25} onClick={Onsearch} />
        {hasAdd && <IoMdAdd size={26} onClick={addActionClick} />}
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
