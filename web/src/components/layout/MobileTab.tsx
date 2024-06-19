import { useAppSelector } from "@/hooks/state";
import { StyledTab } from "@/styles/components/styled";
import { colors, poppins } from "@/styles/global";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHome } from "react-icons/ai";

interface TabProps {
  icon: React.ReactElement;
  label: string;
  path: any;
  push: any;
}

const MobileTab: React.FC<TabProps> = ({ icon, label, path, push }) => {
  const theme = useAppSelector((state) => state.system.theme);
  const isLight = theme === "light";
  const themed = isLight ? colors.black : colors.white;
  const router = useRouter();
  const isActive = router.pathname === path;
  const activeColor = isActive ? colors.primaryColor : themed;
  return (
    <StyledTab onClick={() => push(`${path}`)} style={{ color: activeColor }}>
      {icon}
      {isActive ? <p className={poppins.className}>{label}</p> : null}
    </StyledTab>
  );
};

export default MobileTab;
