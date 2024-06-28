import { colors, getDevice } from "@/styles/global";
import styled from "styled-components";

export const AInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: flex-start;
`;

export const ALabel = styled.label`
  font-size: 13px;
  margin-left: 4px;
`;

export const AInputContainer = styled.div`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  padding: 10px;
  background: ${colors.softGray};
  color: ${colors.primaryGray};
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: ${getDevice("xl")}) {
    width: 550px;
    height: 75px;
    padding: 16px;
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    width: 420px;
    height: 65px;
    padding: 16px;
  }
  @media screen and (max-width: ${getDevice("md")}) {
    width: 310px;
    height: 65px;
    padding: 16px;
  }
  @media screen and (max-width: ${getDevice("sm")}) {
    width: 380px;
    height: 65px;
    padding: 16px;
  }
`;

export const AInput = styled.input`
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
  ::placeholder {
    color: ${colors.primaryGray};
  }
  &:focus {
    caret-color: ${colors.primaryColor};
  }
`;

export const ButtonInterFace = styled.button`
  height: 50px;
  color: white;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    opacity: 0.75;
  }
  &:disabled {
    opacity: 0.5;
  }

  @media screen and (max-width: ${getDevice("xl")}) {
    height: 75px;
  }
  @media screen and (max-width: ${getDevice("lg")}) {
    height: 65px;
  }
`;

export const QText = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
  font-size: 12px;
  justify-content: center;

  span {
    color: ${colors.primaryColor};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  @media screen and (max-width: ${getDevice("md")}) {
    margin-bottom: 1rem;
  }
`;

export const StyledToast = styled.div`
  width: 300px;
  height: 60px;
  border-radius: 10px;
  position: fixed;
  z-index: 400;
  display: flex;
  /* padding: 16px; */
  flex-direction: column;
  gap: 6px;
  cursor: pointer;

  .close {
    cursor: pointer;
    color: white;
  }

  p {
    font-size: 14px;
  }

  /* Load effect */
  .loadToast {
    animation: load 3s ease infinite;
    width: 300px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 11px;
    transform: translateY(-13.5px) translateX(-1px);
  }

  @keyframes load {
    0% {
      width: 300px;
    }
    7.14% {
      width: 278.57px;
      border-bottom-right-radius: 0px;
    }
    14.28% {
      width: 257.14px;
      border-bottom-right-radius: 0px;
    }
    21.42% {
      width: 235.71px;
      border-bottom-right-radius: 0px;
    }
    28.56% {
      width: 214.28px;
      border-bottom-right-radius: 0px;
    }
    35.70% {
      width: 192.85px;
      border-bottom-right-radius: 0px;
    }
    42.84% {
      width: 171.42px;
      border-bottom-right-radius: 0px;
    }
    49.98% {
      width: 149.99px;
      border-bottom-right-radius: 0px;
    }
    57.12% {
      width: 128.56px;
      border-bottom-right-radius: 0px;
    }
    64.26% {
      width: 107.13px;
      border-bottom-right-radius: 0px;
    }
    71.40% {
      width: 85.7px;
      border-bottom-right-radius: 0px;
    }
    78.54% {
      width: 64.27px;
      border-bottom-right-radius: 0px;
    }
    85.68% {
      width: 42.84px;
      border-bottom-right-radius: 0px;
    }
    92.82% {
      width: 21.41px;
      border-bottom-right-radius: 0px;
    }
    100% {
      width: 1px;
    }
  }
`;

export const IToast = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ToastLoder = styled.div`
  height: 7px;
  width: auto;
  transform: translateY(-9.5px);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const DSearchContainer = styled.div`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.search};
  color: ${colors.primaryGray};
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: ${getDevice("md")}) {
    width: 100%;
  }
`;

export const DSearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};

  ::placeholder {
    color: ${colors.primaryGray};
  }
  &:focus {
    caret-color: ${colors.primaryColor};
  }
`;

export const InfoHeader = styled.nav`
  display: none;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
  position: fixed;
  padding: 1rem;
  width: 100%;
  z-index: 90;
  background: ${({ theme }) => theme.colors.background};

  @media screen and (max-width: ${getDevice("md")}) {
    display: flex;
  }
`;

export const GlobalSearchWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 100%;
  z-index: 300;
  position: fixed;
  display: none;
  flex-direction: column;
  padding: 1rem;

  .__close_search_icon {
    padding: 8px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.icon};
  }

  @media screen and (max-width: ${getDevice("md")}) {
    display: flex;
  }
`;

export const Styled_Backdrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.5);
  z-index: 500;
`;

export const TagsConatiner = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  width: 70%;
  border-radius: 11px;
  border: 1px solid ${({ theme }) => theme.colors.nav};
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${getDevice("md")}) {
    width: 100%;
  }
`;

export const OpenSelector = styled.div`
  align-items: center;
  display: flex;
  gap: 18px;
`;

export const Styled_Tags = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.nav};
  overflow-y: auto;
  position: absolute;
  z-index: 100;
  right: 0;
  bottom: -5px;
  border-radius: 11px;
`;

export const TagContent = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
  width: 100%;
  gap: 16px;

  &:hover {
    background: ${({ theme }) => theme.colors.icon};
    cursor: pointer;
  }
`;

export const SelectionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: ${getDevice("md")}) {
    flex-direction: column;
    gap: 1rem;
  }
`;
