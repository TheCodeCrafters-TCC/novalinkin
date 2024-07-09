import { StaticImageData } from "next/image";
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
  isModal?: boolean | any;
  hasToast?: boolean | any;
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

export type AuthStateProps = {
  token: string | any;
  firstName: string;
  lastName: string;
  email: string;
  slug: string;
  userId: string;
  userLoaded: boolean;
  loginStatus?: "pending" | "successful" | "failed" | "";
  loginError?: string | any;
  registerStatus: "pending" | "successful" | "failed" | "";
  verifying_mail_status: "pending" | "successful" | "failed" | "";
  verifying_mail_error: string | any;
  req_reset_status: "pending" | "successful" | "failed" | "";
  req_res_error: string | any;
  registerError?: string | any;
  userProfile: string;
  isVerified: boolean;
  hasVerified_email: boolean;
  gender?: "male" | "female" | "";
  code: "";
};

export type UserType = {
  token: string | any;
  firstName: string;
  lastName: string;
  userId: string;
  slug: string;
  email: string;
  isVerified: boolean | any;
  userProfile?: string;
  hasVerified_email: boolean;
};

export type UDataProps = {
  name: string;
  /**Change StaticImage once it time for API */
  image: StaticImageData;
  desc?: string;
  isVerified: boolean;
};

export interface UserProps {
  user: UDataProps;
}

export type Community = {
  name: string;
  /**Change StaticImage once it time for API */
  image: StaticImageData;
  desc?: string;
  isVerified: boolean;
};

export interface CommunityProps {
  community: Community;
}

export type ContextproviderProps = {
  children: React.ReactNode;
};

export type ModalsContextProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export interface FormProps {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  image?: StaticImageData | string;
}

export type UserTProps = {
  _id: string;
  firstName: string;
  lastName: string;
  slugName: string;
  email?: string;
  isVerified: false;
  articles?: any[];
  community?: any[];
  connections: any[];
  requests?: any[];
  description?: string | any;
  userProfile: string | any;
  createdAt: string | Date | any;
  website: string | any;
  location: string | any;
  twitter_url: string | any;
  linkedin_url: string | any;
};

export interface RequestProps {
  _id: string | any;
  connectionRequest: string | any;
  requestId: string | any;
  status: "Pending" | "Declined" | "Accepted" | "";
}

export interface RequestUserProps {
  _id: string;
  firstName: string;
  lastName: string;
  slugName: string;
  isVerified: false;
  userProfile: string | any;
}

export type UserStateType = {
  users: UserTProps[];
  currentUser: UserTProps;
  connect_req: RequestProps[];
  fetching_status: "pending" | "successful" | "failed" | "";
  fetching_error: string | any;
  fetching_current_status: "pending" | "successful" | "failed" | "";
  fetching_current_error: string | any;
  updating_status: "pending" | "successful" | "failed" | "";
  updating_error: string | any;
  fetching_req_status: "pending" | "successful" | "failed" | "";
  fetching_req_error: string | any;
  connect_req_status: "pending" | "successful" | "failed" | "";
  connect_req_error: string | any;
  updating_profile_status: "pending" | "successful" | "failed" | "";
  updating_profile_error: string | any;
};

type NOtActionTypes = "like" | "comment" | "reply" | "connect" | "star";

interface NotificationProp {
  _id: string;
  ownerId: string;
  notifyType: NOtActionTypes;
  header: string;
  body: string;
  reactId: string;
  slugName: string;
  seen: boolean;
  Image: string | any;
  createdAt: Date | string;
  objectId?: string;
}

export type NotificationType = {
  unread: NotificationProp[];
  all: NotificationProp[];
  fetch_status: "pending" | "successful" | "failed" | "";
  fetch_error: string;
};

// export type Notification = {
//   ownerId?: string;
//   notifyType: string;
//   header: string;
//   body: string;
//   reactId?: string;
//   objectId?: string;
//   seen: boolean;
//   Images: Array<any>;
// };

export type NotificationProps = {
  not_i: NotificationProp;
};
