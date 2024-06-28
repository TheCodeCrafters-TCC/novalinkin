import dynamic from "next/dynamic";

export const MobileNavBar = dynamic(() => import("./layout/MobileNavBar"), {
  ssr: false,
});

export const Header = dynamic(() => import("./auth/Header"), { ssr: false });
export const MobileSideBar = dynamic(() => import("./layout/MobileSideBar"), {
  ssr: false,
});

export { default as AppLayout } from "./layout/AppLayout";
export { default as AuthInputs } from "./auth/AuthInputs";
export { default as Info } from "./auth/Info";
export { default as LoginInfo } from "./auth/LoginInfo";
export { default as LoginInputs } from "./auth/LoginInputs";
export { default as ForgotPassInfo } from "./auth/ForgotPassInfo";
export { default as LoadingScreen } from "./LoadingScreen";
export { default as MobileTabs } from "./layout/MobileTabs";
export { default as Feed } from "./article/Feed";
export { default as SideBar } from "./layout/SideBar";
export { default as DynamicBar } from "./layout/DynamicBar";
export { default as Profile } from "./user/Profile";
export { default as Container } from "./user/connect/Container";
export { default as ExploreContainer } from "../components/explore/Container";
export { default as CommunityContainer } from "../components/community/Container";
export { default as RequestReset } from "../components/auth/RequestReset";
export { default as EmailSent } from "../components/auth/EmailSent";
export { default as OTP } from "../components/auth/OTP";
export { default as MobileSearch } from "../components/search/MobileSearch";
export { default as NetworksResult } from "../components/search/NetworksResult";
export { default as CommunityResult } from "../components/search/CommunityResult";
export { default as ExploreResult } from "../components/search/ExploreResult";
export { default as UserNetworkResult } from "../components/search/UserNetworkResult";
export { default as ShareArticles } from "./modals/ShareArticles";
