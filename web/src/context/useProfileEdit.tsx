import { ProfileEdit } from "@/components";
import { ContextproviderProps, ModalsContextProps } from "@/types";
import { createContext, useContext, useState } from "react";

const EditProfileContext = createContext<ModalsContextProps | undefined>(
  undefined
);

export const EditProfileProvider: React.FC<ContextproviderProps> = ({
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
    <EditProfileContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
      {isOpen && <ProfileEdit />}
    </EditProfileContext.Provider>
  );
};

export const useProfileEdit = () => {
  const context = useContext(EditProfileContext);
  if (context === undefined) {
    throw new Error("ProfileEdit can't be called outside it's provider");
  }
  return context;
};
