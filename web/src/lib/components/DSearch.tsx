import React, { startTransition, useEffect, useState } from "react";
import { DSearchContainer, DSearchInput } from "../styles/styled";
import { IoSearchOutline } from "react-icons/io5";
import { poppins } from "@/styles/global";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { SearchProps } from "../types";

const DSearch: React.FC<SearchProps> = ({
  queryPage,
  placeholder,
  isConnect,
  isProfile,
  isConnection,
  isExplore,
  isCommunity,
  isCommunityView,
}) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string | any>("");
  const queryState = useAppSelector((state) => state.system.query);
  const pQuery = queryState.profileSlug;
  const cQuery = queryState.communitySlug;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      router.push(`/${queryPage}?query=${e.target.value}`);
    }
  };

  useEffect(() => {
    startTransition(() => {
      if (
        !isConnect &&
        !isProfile &&
        !isExplore &&
        !isCommunity &&
        !isConnection &&
        !isCommunityView &&
        !searchQuery
      ) {
        router.replace("/");
      } else if (isConnect && !searchQuery) {
        router.replace("/connect");
      } else if (isProfile && !searchQuery) {
        router.replace(`/profile/${pQuery}`);
      } else if (isConnection && !searchQuery) {
        router.replace(`/profile/${pQuery}/connections`);
      } else if (isCommunity && !searchQuery) {
        router.replace("/community");
      } else if (isCommunityView && !searchQuery) {
        router.replace(`/community/${cQuery}`);
      }
    });
  }, [
    searchQuery,
    isCommunity,
    isCommunityView,
    isConnect,
    isConnection,
    isExplore,
    isProfile,
    pQuery,
    // router,
  ]);

  return (
    <DSearchContainer>
      <IoSearchOutline size={30} />
      <DSearchInput
        className={poppins.className}
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearch}
      />
    </DSearchContainer>
  );
};

export default DSearch;
