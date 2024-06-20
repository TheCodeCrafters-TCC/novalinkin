import dynamic from "next/dynamic";

export const NoSSRDyn = dynamic(() => import("./layout/DynamicBar"), {
  ssr: false,
});
export const NoSSRBar = dynamic(() => import("./layout/MobileNavBar"), {
  ssr: false,
});

export const InfoPageHeader = dynamic(() => import("./layout/InfoPageHeader"), {
  ssr: false,
});

export { default as AppLayout } from "./layout/AppLayout";
export { default as Header } from "./auth/Header";
export { default as AuthInputs } from "./auth/AuthInputs";
export { default as Info } from "./auth/Info";
export { default as LoginInfo } from "./auth/LoginInfo";
export { default as LoginInputs } from "./auth/LoginInputs";
export { default as LoadingScreen } from "./LoadingScreen";
export { default as MobileNavBar } from "./layout/MobileNavBar";
export { default as MobileTabs } from "./layout/MobileTabs";
export { default as Feed } from "./article/Feed";
export { default as SideBar } from "./layout/SideBar";
export { default as DynamicBar } from "./layout/DynamicBar";
export { default as Profile } from "./user/Profile";
