import { SearchModal } from "@/components";
import { createContext, useContext, useState } from "react";

interface SearchModalProviderProps {
  children: React.ReactNode;
}

type SearchContextProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchModalProvider: React.FC<SearchModalProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  function onOpen() {
    setIsOpen(true);
  }
  function onClose() {
    setIsOpen(false);
  }

  return (
    <SearchContext.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
      {isOpen && <SearchModal />}
    </SearchContext.Provider>
  );
};

export const useSearchModal = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("SearchModal can't be called outside it provider!");
  }
  return context;
};
