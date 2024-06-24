import React from "react";

type QueryProps = {
  profileSlug: string | any;
  communitySlug: string | any;
};

export type SystemTypes = {
  theme: string;
  query: QueryProps;
  currentPage: string | any;
  isReturningUser: boolean | any;
};

export type ThemeType = {
  primary: string;
  text: string;
  background: string;
  border: string;
};

export type DeviceType =
  | "sm"
  | "md"
  | "lg"
  | "mt"
  | "xxm"
  | "tab"
  | "xl"
  | "dxs"
  | "dsm"
  | "dmd"
  | "dlg"
  | "dxl"
  | "dxxl";

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
  hasicon: boolean | any;
  iconVariant: string | any;
  totalNot: number | any;
};

export type ActionButtonProps = {
  data: Array<object> | any;
  icon?: React.ReactElement;
  title: string;
  onActionClick?: () => void;
  variant: "like" | "comments" | "views" | "star";
};

export type TitleProps = {
  title: string;
  className?: React.CSSProperties;
  styles?: React.CSSProperties;
};

type StateInput = {
  email: string | any;
  firstName: string | any;
  lastName: string | any;
  password: string | any;
};

export type AuthStateProps = {
  name: string;
  email: string;
  slug: string;
  profile: string;
  verificationStatus: "verified" | "pending" | "";
  userLoaded: boolean;
  loginStatus: "pending" | "successful" | "failed" | "";
  registerStatus: "pending" | "successful" | "failed" | "";
  userProfile: object | null;
  isVerified: boolean;
  gender: "male" | "female" | "";
  onHold: StateInput;
};
