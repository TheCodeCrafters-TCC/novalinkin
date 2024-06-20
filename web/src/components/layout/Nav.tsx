import { NavLink } from "@/styles/components/styled";
import { colors } from "@/styles/global";
import { NavProps } from "@/types";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";
import { MdDynamicFeed } from "react-icons/md";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const Nav: React.FC<NavProps> = ({ icon, label, url, push, isProfile }) => {
  const router = useRouter();
  const isActive = router.pathname === url;
  const activeColor: any = isActive && colors.primaryColor;
  return (
    <NavLink
      onClick={() => push(url)}
      style={{ color: activeColor }}
      className={isActive ? "nav_link" : "__nav_unactive"}
    >
      {icon}
      <p className={poppins.className}>{label}</p>
      {isActive && <div className="dot" />}
    </NavLink>
  );
};

export default Nav;
