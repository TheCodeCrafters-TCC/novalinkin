import { getDevice, poppins, poppinsSemibold } from "@/styles/global";
import React from "react";
import { LuSettings2 } from "react-icons/lu";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1 className={poppinsSemibold.className}>Community</h1>
      <LuSettings2 size={36} />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
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
