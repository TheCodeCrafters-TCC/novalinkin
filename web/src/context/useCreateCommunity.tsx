import { CreateCommunity } from "@/components";
import { ContextproviderProps, ModalsContextProps } from "@/types";
import { createContext, useContext, useState } from "react";

const CreateCommunityModalContext = createContext<
  ModalsContextProps | undefined
>(undefined);

export const CCModalProvider: React.FC<ContextproviderProps> = ({
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
    <CreateCommunityModalContext.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
      {isOpen && <CreateCommunity />}
    </CreateCommunityModalContext.Provider>
  );
};

export const useCreateCommunity = () => {
  const context = useContext(CreateCommunityModalContext);
  if (context === undefined) {
    throw new Error("CreateCommunity can't be called outside it's provider");
  }
  return context;
};
