import { MobileSideBar } from "@/components";
import React, { createContext, useContext, useState } from "react";

interface MobileSideNavProviderProps {
  children: React.ReactNode;
}

type MobileSideNavContext = {
  isOpen: boolean;
  Onopen: () => void;
  Onclose: () => void;
};

const MobileSNContext = createContext<MobileSideNavContext | undefined>(
  undefined
);

export const MobileSideNavProvider: React.FC<MobileSideNavProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function Onopen() {
    setIsOpen(true);
  }
  function Onclose() {
    setIsOpen(false);
  }

  return (
    <MobileSNContext.Provider value={{ isOpen, Onclose, Onopen }}>
      {children}
      {isOpen && <MobileSideBar />}
    </MobileSNContext.Provider>
  );
};

export const useMobileSideNav = () => {
  const context = useContext(MobileSNContext);
  if (context === undefined) {
    throw new Error("MobileSideNav should be called inside it's provider");
  }
  return context;
};
