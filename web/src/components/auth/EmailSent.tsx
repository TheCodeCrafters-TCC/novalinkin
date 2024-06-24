import { SentMail } from "@/assets";
import { infoData } from "@/data/info";
import { poppins } from "@/styles/global";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const EmailSent = () => {
  return (
    <StyledMail className={poppins.className}>
      <StyledSentMail src={SentMail} alt="Mail sent" priority />
      <p className={`info-tag ${poppins.className}`}>{infoData.sent_}</p>
    </StyledMail>
  );
};

export default EmailSent;

const StyledMail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-2rem);
  gap: 1rem;

  .info-tag {
    font-size: 14px;
    color: #413b3b;
    /* text-align: center; */
    width: 300px;
  }
`;

const StyledSentMail = styled(Image)`
  width: 200px;
  height: 200px;
`;
