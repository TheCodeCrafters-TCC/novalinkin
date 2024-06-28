import { StyledMobileTabs } from "@/styles/components/styled";
import React from "react";
import MobileTab from "./MobileTab";
import { useRouter } from "next/navigation";
import { MobileTabsData } from "@/constants/nav";

const MobileTabs = () => {
  const router = useRouter();
  return (
    <StyledMobileTabs className="nav_bot">
      {MobileTabsData.map((nav, index) => (
        <MobileTab
          push={router.push}
          path={nav.url}
          key={index}
          icon={nav.icon}
          label={nav.label}
          isArtModal={nav.isModal}
        />
      ))}
    </StyledMobileTabs>
  );
};

export default MobileTabs;
