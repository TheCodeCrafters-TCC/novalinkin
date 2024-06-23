import React from "react";
import { InfoHeader } from "../styles/styled";
import { IoSearch } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/router";
import { VscSettings } from "react-icons/vsc";
import styled from "styled-components";

interface HeaderProps {
  filter: boolean;
}

const InfoPageHeader: React.FC<HeaderProps> = ({ filter }) => {
  const router = useRouter();
  const isUser = true;
  return (
    <InfoHeader>
      <FaArrowLeft size={25} onClick={router.back} />
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
