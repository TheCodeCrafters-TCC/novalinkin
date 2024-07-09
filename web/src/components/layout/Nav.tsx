import { useSearchModal } from "@/context/useSearchModal";
import { useAppSelector } from "@/hooks/state";
import { useToaster } from "@/hooks/useToast";
import { NotIcon } from "@/lib";
import { NavLink } from "@/styles/components/styled";
import { IconWrap, colors } from "@/styles/global";
import { NavProps } from "@/types";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";
import { MdDynamicFeed } from "react-icons/md";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const Nav: React.FC<NavProps> = ({
  icon,
  label,
  url,
  push,
  isProfile,
  hasicon,
  iconVariant,
  totalNot,
  isModal,
  hasToast,
}) => {
  const router = useRouter();
  const { onOpen } = useSearchModal();
  const { toast } = useToaster();
  const isActive = router.pathname === url;
  const activeColor: any = isActive && colors.primaryColor;
  const user = useAppSelector((state) => state.auth);
  function navPush() {
    if (user.userLoaded) {
      if (isProfile) {
        push(`/profile/${user?.slug}`);
      } else if (isModal) {
        onOpen();
      } else if (hasToast) {
        toast("info", "Not Available");
      } else {
        push(url);
      }
    } else {
      router.replace("/auth/login");
    }
  }
  return (
    <NavLink
      title={label}
      onClick={navPush}
      style={{ color: activeColor }}
      className={isActive ? "nav_link" : "__nav_unactive"}
    >
      <IconWrap>
        {hasicon && <NotIcon label={totalNot} varinat={iconVariant} />}
        {icon}
      </IconWrap>
      <p className={poppins.className}>{label}</p>
      {isActive && <div className="dot" />}
    </NavLink>
  );
};

export default Nav;
