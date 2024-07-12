import { CommunityRequest } from "@/components";
import { ContextproviderProps, ModalsContextProps } from "@/types";
import { createContext, useContext, useState } from "react";

const RequestContext = createContext<ModalsContextProps | undefined>(undefined);

export const C_RequestModalProvider = ({ children }: ContextproviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  function onOpen() {
    setIsOpen(true);
  }
  function onClose() {
    setIsOpen(false);
  }

  return (
    <RequestContext.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
      {isOpen && <CommunityRequest />}
    </RequestContext.Provider>
  );
};

export const useCRequestsModal = () => {
  const context = useContext(RequestContext);
  if (context === undefined) {
    throw new Error("Can't call outside provider");
  }
  return context;
};
