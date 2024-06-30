import { useSearchModal } from "@/context/useSearchModal";
import { Backdrop, Divider, FilterSwitch } from "@/lib";
import {
  StyledShareContainer,
  ContentHeader,
} from "@/styles/components/styled";
import { colors, getDevice, poppins, poppinsSemibold } from "@/styles/global";
import React, { useState } from "react";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import styled from "styled-components";
import ArticlesResult from "../search/ArticlesResult";
import NetworksResult from "../search/NetworksResult";
import CommunityResult from "../search/CommunityResult";

const SearchModal = () => {
  const { onClose } = useSearchModal();
  const [articles, setArticles] = useState(true);
  const [network, setNetwork] = useState(false);
  const [community, setCommunity] = useState(false);
  const isArticleFocus = (articles && `4px solid ${colors.primaryColor}`) || "";
  const isNetworkFocus = (network && `4px solid ${colors.primaryColor}`) || "";
  const isCMFocus = (community && `4px solid ${colors.primaryColor}`) || "";
  const hasArtColor = (articles && colors.primaryColor) || "";
  const hasNColor = (network && colors.primaryColor) || "";
  const hasCMColor = (community && colors.primaryColor) || "";
  const [value, setValue] = useState<string>("");

  function handleSwicth(e: React.MouseEvent<HTMLParagraphElement>) {
    const element = e.currentTarget.textContent;
    if (element === "Articles") {
      setArticles(true);
      setNetwork(false);
      setCommunity(false);
    } else if (element === "Network") {
      setArticles(false);
      setCommunity(false);
      setNetwork(true);
    } else if (element === "Community") {
      setNetwork(false);
      setArticles(false);
      setCommunity(true);
    }
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    e.stopPropagation();
    setValue(e.target.value);
  }

  const Search = () => (
    <StyledSearchContainer>
      <ContentHeader>
        <h1 className={poppinsSemibold.className}>Global Search</h1>
        <IoClose size={35} onClick={onClose} />
      </ContentHeader>
      <ContextWrapper>
        <StyledInput>
          <IoSearchOutline size={30} />
          <SearchInput
            className={poppins.className}
            value={value}
            onChange={handleSearch}
            placeholder="Search..."
            autoFocus
          />
        </StyledInput>
        <StyledIAction>
          <FilterSwitch
            label="Articles"
            className={poppins.className}
            onActionClick={handleSwicth}
            style={{ borderBottom: isArticleFocus, color: hasArtColor }}
          />
          <FilterSwitch
            label="Network"
            className={poppins.className}
            onActionClick={handleSwicth}
            style={{ borderBottom: isNetworkFocus, color: hasNColor }}
          />
          <FilterSwitch
            label="Community"
            className={poppins.className}
            onActionClick={handleSwicth}
            style={{ borderBottom: isCMFocus, color: hasCMColor }}
          />
        </StyledIAction>
        <StyledResultWrap>
          {articles && <ArticlesResult searchQuery={value} />}
          {network && <NetworksResult searchQuery={value} />}
          {community && <CommunityResult searchQuery={value} />}
        </StyledResultWrap>
      </ContextWrapper>
    </StyledSearchContainer>
  );
  return (
    <Backdrop>
      <Search />
    </Backdrop>
  );
};

export default SearchModal;

const StyledSearchContainer = styled.div`
  width: 45%;
  background: ${({ theme }) => theme.colors.background};
  height: 85%;
  border-radius: 11px;
  gap: 1px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 100;
  box-shadow: 2px 2px 2px 2px ${({ theme }) => theme.colors.nav};

  @media screen and (max-width: ${getDevice("xl")}) {
    width: 80%;
  }
`;

const ContextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  position: relative;
`;

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.colors.search};
  padding: 1rem;
  border-radius: 8px;
  color: ${colors.primaryGray};
  position: relative;
`;

const SearchInput = styled.input`
  width: 90%;
  outline: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  position: relative;

  ::placeholder {
    color: ${colors.primaryGray};
  }
  &:focus {
    caret-color: ${colors.primaryColor};
  }
`;

const StyledIAction = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
  width: 100%;

  p {
    padding: 16px;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
`;

export const StyledResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: scroll;
  height: 280px;
  margin-top: -1rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;
