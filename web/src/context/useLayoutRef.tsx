import React, { createContext, useContext, useRef } from "react";

interface LayoutRefProviderprops {
  children: React.ReactNode;
}

type LayoutContextProps = {
  layoutRef: any;
};

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const LayoutRefProvider: React.FC<LayoutRefProviderprops> = ({
  children,
}) => {
  const layoutRef = useRef(null);

  return (
    <LayoutContext.Provider value={{ layoutRef }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutRef = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("Wrap app layout with LayoutProvider");
  }
  return context;
};
