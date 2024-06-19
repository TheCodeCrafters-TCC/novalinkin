import React from "react";

export type SystemTypes = {
  theme: string;
};

export type ThemeType = {
  primary: string;
  text: string;
  background: string;
  border: string;
};

export type DeviceType = "sm" | "md" | "lg" | "xl";

export type MobileNavProps = {
  hasUserIcon?: boolean;
  hasSearchIcon?: boolean;
  hasFilterIcon?: boolean;
  hasModeIcon?: boolean;
  onClick?: () => void;
  infoPage?: boolean;
  label?: string;
};

export type NavProps = {
  url: string;
  label: string;
  icon: React.ReactElement;
  push: any;
  isProfile: boolean | any;
};
