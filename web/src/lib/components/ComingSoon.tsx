import { getDevice, poppins } from "@/styles/global";
import React from "react";
import { MdUpcoming } from "react-icons/md";
import styled from "styled-components";

const ComingSoon = () => {
  return (
    <ComingSoonWrapper>
      <MdUpcoming size={80} />
      <p className={poppins.className}>Coming soon</p>
    </ComingSoonWrapper>
  );
};

export default ComingSoon;

const ComingSoonWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 85vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.nav};
  transform: translateX(-6rem);

  @media screen and (max-width: ${getDevice("dxs")}) {
    transform: translateX(-4rem);
  }
  @media screen and (max-width: ${getDevice("xl")}) {
    transform: translateX(-2rem);
  }
  @media screen and (max-width: ${getDevice("md")}) {
    transform: translateX(0);
  }

  p {
    font-size: 20px;
  }
`;
