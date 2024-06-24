import { Toast } from "@/lib";
import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  FC,
} from "react";

type PositionType =
  | "top-center"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

type VariantProps = "error" | "info" | "success";

interface ToasterContextProps {
  toast: (variant: string, msg: string, position?: string) => void;
}

const ToasterContext = createContext<ToasterContextProps | undefined>(
  undefined
);

interface ToasterProviderProps {
  children: ReactNode;
}

export const ToasterProvider: FC<ToasterProviderProps> = ({ children }) => {
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastVariant, setToastVariant] = useState<VariantProps>("info");
  const [toastPosition, setToastPosition] =
    useState<PositionType>("top-center");
  const [showToast, setShowToast] = useState<boolean>(false);

  const toast = (variant: string, msg: string, position?: string) => {
    setToastVariant(variant as VariantProps);
    setToastMessage(msg);
    setToastPosition(position as PositionType);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000); // Hide toast after 3 seconds
  };

  return (
    <ToasterContext.Provider value={{ toast }}>
      {children}
      <Toast
        toast={toastMessage}
        endToast={() => setShowToast(false)}
        variant={toastVariant}
        showToasT={showToast}
        position={toastPosition}
      />
    </ToasterContext.Provider>
  );
};

export const useToaster = () => {
  const context = useContext(ToasterContext);
  if (context === undefined) {
    throw new Error("useToaster must be used within a ToasterProvider");
  }
  return context;
};
