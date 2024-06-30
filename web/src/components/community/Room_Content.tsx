import { NoRoom } from "@/assets";
import { poppins, colors } from "@/styles/global";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Room_Content = () => {
  return (
    <StyledIn>
      <StyledImage src={NoRoom} alt="Notify" priority />
      <p className={poppins.className}>No room available</p>
    </StyledIn>
  );
};

export default Room_Content;

export const StyledIn = styled.div`
  width: 100%;
  padding: 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    color: ${colors.primaryGray};
    /* color: ${({ theme }) => theme.colors.nav}; */
    font-size: 17px;
  }
`;
export const StyledImage = styled(Image)`
  width: 160px;
  height: 160px;
`;
