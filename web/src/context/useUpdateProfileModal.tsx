import { ProfileUpdate } from "@/components";
import { ContextproviderProps, ModalsContextProps } from "@/types";
import { createContext, useContext, useState } from "react";

const ProfileContext = createContext<ModalsContextProps | undefined>(undefined);

export const ProfileUpdateModalProvider: React.FC<ContextproviderProps> = ({
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
    <ProfileContext.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
      {isOpen && <ProfileUpdate />}
    </ProfileContext.Provider>
  );
};

export const useProfileUpdateModal = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("ProfileUpdateModal can't be called outside it's provider");
  }
  return context;
};
