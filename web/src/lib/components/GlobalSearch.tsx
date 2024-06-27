import React, { useState } from "react";
import { GlobalSearchWrapper } from "../styles/styled";
import {
  CommunityResult,
  ExploreResult,
  MobileSearch,
  NetworksResult,
  UserNetworkResult,
} from "@/components";
import { useRouter } from "next/router";
import { useAppSelector } from "@/hooks/state";
import { capitalizeAndRemoveHyphen } from "../hooks";
import { SpaceBetween } from "@/styles/global";
import { IoClose } from "react-icons/io5";
import ArticlesResult from "@/components/search/ArticlesResult";
import { useMobileSearch } from "@/context/useMobileSearch";

const GlobalSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const pQuery = useAppSelector((state) => state.system.query.profileSlug);
  const Name = pQuery ? capitalizeAndRemoveHyphen(pQuery as string) : "Users";
  const inCommunity = router.pathname === "/community";
  const inNetwork = router.pathname === "/connect";
  const inProfile = router.pathname === "/profile/[slug]";
  const inProfileConnection = router.pathname === "/profile/[slug]/connection";
  const inExplore = router.pathname === "/explore";
  const inArticles = router.pathname === "/";

  const getPlaceholder = () => {
    if (inCommunity) {
      return "Search community";
    } else if (inNetwork) {
      return "Search network";
    } else if (inProfile || inProfileConnection) {
      return `Search in ${Name}'s network`;
    } else if (inExplore) {
      return "Search in explore";
    } else if (inArticles) {
      return "Search articles";
    }
  };

  const getSearchLocation = () => {
    if (inCommunity) {
      return <CommunityResult searchQuery={searchQuery} />;
    } else if (inNetwork) {
      return <NetworksResult searchQuery={searchQuery} />;
    } else if (inProfile || inProfileConnection) {
      return <UserNetworkResult searchQuery={searchQuery} />;
    } else if (inExplore) {
      return <ExploreResult searchQuery={searchQuery} />;
    } else if (inArticles) {
      return <ArticlesResult searchQuery={searchQuery} />;
    }
  };

  const { Onclose } = useMobileSearch();

  return (
    <GlobalSearchWrapper>
      <SpaceBetween>
        <MobileSearch
          placeholder={getPlaceholder()}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <IoClose size={38} onClick={Onclose} className="__close_search_icon" />
      </SpaceBetween>
      {getSearchLocation()}
    </GlobalSearchWrapper>
  );
};

export default GlobalSearch;
