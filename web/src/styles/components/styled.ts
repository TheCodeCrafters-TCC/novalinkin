"use client";
import styled from "styled-components";
import { colors } from "../global";
import Image from "next/image";

export const StyledLayout = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledNav = styled.nav`
  display: flex;
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors?.border};
  padding: 2rem;
  justify-content: space-between;

  svg {
    cursor: pointer;
    /* background: ${colors}; */
    padding: 3px;
    /* color: ${({ theme }) => theme.colors?.text}; */
    border-radius: 6px;
    /* color: ${({ theme }) => theme.color?.text}; */
  }
`;

export const StyledLogoWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrap = styled(Image)`
  width: 60px;
  height: 60px;
`;

export const StyledLogoText = styled.h1`
  color: ${colors.primaryColor};
  font-size: 18px;
  transform: translateX(-16px);
`;

export const ActionBarWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
