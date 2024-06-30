import { poppinsSemibold } from "@/styles/global";
import router from "next/router";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { InfoHeader } from "../styles/styled";
import styled from "styled-components";

interface NotProps {
  label: string;
}

const NotificationHeader: React.FC<NotProps> = ({ label }) => {
  return (
    <InfoHeader>
      <Wrap>
        <FaArrowLeft size={25} onClick={router.back} />
        {label && <p className={poppinsSemibold.className}>{label}</p>}
      </Wrap>
    </InfoHeader>
  );
};

export default NotificationHeader;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  p {
    font-size: 17px;
  }
`;
