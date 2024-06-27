import { DSearchInput } from "@/lib/styles/styled";
import { MobileSearchWrap } from "@/styles/components/styled";
import { poppins } from "@/styles/global";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { SearchProps } from "./interface";

const MobileSearch: React.FC<SearchProps> = ({
  isCommunity,
  isConnect,
  isConnection,
  isExplore,
  isProfile,
  placeholder,
  searchQuery,
  setSearchQuery,
}) => {
  const router = useRouter();

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }
  return (
    <MobileSearchWrap>
      <IoSearchOutline size={30} />
      <DSearchInput
        className={poppins.className}
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearch}
      />
    </MobileSearchWrap>
  );
};

export default MobileSearch;
