import { getDevice, poppins, poppinsSemibold } from "@/styles/global";
import { useRouter } from "next/router";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import styled from "styled-components";

const Header = () => {
  const router = useRouter();
  return (
    <StyledHeader>
      <IconWrap>
        <FaArrowLeft size={36} onClick={() => router.back()} />
        {/* <h1 className={poppinsSemibold.className}>Community</h1> */}
      </IconWrap>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav};

  svg {
    cursor: pointer;
    border-radius: 4px;
    padding: 8px;

    &:hover {
      background: ${({ theme }) => theme.colors.icon};
    }
  }

  h1 {
    font-size: 22px;
  }

  @media screen and (max-width: ${getDevice("md")}) {
    padding: 1rem;
    display: none;
    h1 {
      font-size: 19px;
    }
  }
`;
const IconWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
