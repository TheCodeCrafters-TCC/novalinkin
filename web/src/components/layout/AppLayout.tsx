import { StyledLayout } from "@/styles/components/styled";
import React from "react";
import NavBar from "./NavBar";
import StyledComponentsRegistry from "@/hooks/registry";

interface LayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <NavBar />
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </StyledLayout>
  );
};

export default AppLayout;
