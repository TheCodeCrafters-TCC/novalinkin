import { StyledMobileTabs } from "@/styles/components/styled";
import React from "react";
import MobileTab from "./MobileTab";
import { useRouter } from "next/navigation";
import { MobileTabsData } from "@/constants/nav";
import { useAppSelector } from "@/hooks/state";

const MobileTabs = () => {
  const router = useRouter();
  const notState = useAppSelector((state) => state.notifications);
  const unread = notState.unread?.length;

  return (
    <StyledMobileTabs className="nav_bot">
      {MobileTabsData.map((nav, index) => (
        <MobileTab
          push={router.push}
          path={nav.url}
          key={index}
          icon={nav.icon}
          label={nav.label}
          hasToast={nav.hasToast}
          isArtModal={nav.isModal}
          hasIcon={nav.hasIcon}
          totalNot={unread}
        />
      ))}
    </StyledMobileTabs>
  );
};

export default MobileTabs;
