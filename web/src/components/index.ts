import dynamic from "next/dynamic";

export const MobileNavBar = dynamic(() => import("./layout/MobileNavBar"), {
  ssr: false,
});

export { default as AppLayout } from "./layout/AppLayout";
export { default as Header } from "./auth/Header";
export { default as AuthInputs } from "./auth/AuthInputs";
export { default as Info } from "./auth/Info";
export { default as LoginInfo } from "./auth/LoginInfo";
export { default as LoginInputs } from "./auth/LoginInputs";
export { default as LoadingScreen } from "./LoadingScreen";
export { default as MobileTabs } from "./layout/MobileTabs";
export { default as Feed } from "./article/Feed";
export { default as SideBar } from "./layout/SideBar";
export { default as DynamicBar } from "./layout/DynamicBar";
