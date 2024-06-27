import { GlobalSearch } from "@/lib";
import { createContext, useContext, useState } from "react";

interface MobileSearchProvider {
  children: React.ReactNode;
}

interface MobileSearchProps {
  isOpen: boolean;
  Onsearch: () => void;
  Onclose: () => void;
}

const MobileSearchContext = createContext<MobileSearchProps | undefined>(
  undefined
);

export const MobileSearchProvider: React.FC<MobileSearchProvider> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  function Onsearch() {
    setIsOpen(true);
  }
  function Onclose() {
    setIsOpen(false);
  }

  return (
    <MobileSearchContext.Provider value={{ isOpen, Onclose, Onsearch }}>
      {children}
      {isOpen && <GlobalSearch />}
    </MobileSearchContext.Provider>
  );
};

export const useMobileSearch = () => {
  const context = useContext(MobileSearchContext);
  if (context === undefined) {
    throw new Error("MobileSearch can't be used outside it's Provider");
  }
  return context;
};
