import { Dispatch, SetStateAction } from "react";

export interface SearchProps {
  setSearchQuery?: Dispatch<SetStateAction<string>> | any;
  searchQuery?: string | any;
  placeholder?: string | any;
  isConnect?: boolean;
  isProfile?: boolean;
  isConnection?: boolean;
  isExplore?: boolean;
  isCommunity?: boolean;
}
