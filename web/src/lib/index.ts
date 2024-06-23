import dynamic from "next/dynamic";

export const DSearch = dynamic(() => import("./components/DSearch"), {
  ssr: false,
});
export const InfoPageHeader = dynamic(
  () => import("../lib/components/InfoPageHeader"),
  { ssr: false }
);

export { default as AuthInput } from "./components/AuthInput";
export { default as PasswordInput } from "./components/PasswordInput";
export { default as Button } from "./components/Button";
export { default as Toast } from "./components/Toast";
export { default as Divider } from "./components/Divder";
export { default as MarkdownRenderer } from "./components/MarkdownRenderer";
export { default as NotIcon } from "./components/NotIcon";
export { default as Title } from "./components/Title";
export { default as ActionButton } from "./components/ActionButon";
export { default as TruncateText } from "./components/TruncateText";
export { default as NoData } from "./components/NoData";
