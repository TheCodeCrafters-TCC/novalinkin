import { UnderDevelopment } from "@/assets";
import { commMsg } from "@/constants/system";
import { colors, poppins } from "@/styles/global";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const UnderDev = () => {
  return (
    <StyledContainer>
      <Container>
        <DImage src={UnderDevelopment} alt="Underdevelopment" priority />
        <p className={poppins.className}>{commMsg.dev_msg}</p>
      </Container>
    </StyledContainer>
  );
};

export default UnderDev;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;

  p {
    text-align: center;
    color: ${colors.primaryGray};
    font-size: 16px;
  }

  margin-bottom: 1rem;
`;
const DImage = styled(Image)`
  width: 250px;
  height: 250px;
`;
