import styled from "styled-components";
import { colors, getDevice, screens } from "../global";
import Image from "next/image";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const AuthHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 10px;
  padding-right: 2rem;
  padding-left: 1.5rem;

  @media screen and (max-width: ${screens.medium}) {
    padding-top: 16px;
    padding-right: 1.3rem;
    padding-left: 0.75rem;
    display: none;

    img {
      display: none;
    }
    h1 {
      display: none;
    }
  }

  svg {
    cursor: pointer;
    padding: 4px;
    border-radius: 6px;
    &:hover {
      background: ${({ theme }) => theme.colors.icon};
    }
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${getDevice("xl")}) {
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 85vh;
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 85vh;
  }
  @media screen and (max-width: ${getDevice("md")}) {
    height: 90vh;
    width: 100%;
  }
`;

export const LoginAuthWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: ${getDevice("xl")}) {
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 85vh;
    gap: 1px;
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 85vh;
    gap: 1px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  height: 100%;
  margin-top: 4rem;

  /* @media screen and (max-width: ${getDevice("lg")}) {
    justify-content: start;
  } */
  @media screen and (max-width: ${getDevice("md")}) {
    margin-top: 0;
  }
`;
