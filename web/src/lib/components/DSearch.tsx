import React, { useEffect, useState } from "react";
import { DSearchContainer, DSearchInput } from "../styles/styled";
import { IoSearchOutline } from "react-icons/io5";
import { poppins } from "@/styles/global";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { setQuery } from "@/redux/systemSlice";

const DSearch = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string | any>("");
  const queryState = useAppSelector((state) => state.system.query);

  useEffect(() => {
    dispatch(setQuery(searchQuery));
  }, [searchQuery, dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      router.push(`/articles?query=${e.target.value}`);
    }
  };

  useEffect(() => {
    if (!searchQuery) {
      router.replace("/");
    }
  }, [searchQuery]);

  return (
    <DSearchContainer>
      <IoSearchOutline size={30} />
      <DSearchInput
        className={poppins.className}
        placeholder="Search article..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </DSearchContainer>
  );
};

export default DSearch;
