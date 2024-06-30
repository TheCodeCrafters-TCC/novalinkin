import { Backdrop } from "@/lib";
import React from "react";
import MobileSideBar from "../layout/MobileSideBar";
import { useMobileSideNav } from "@/context/useMobileNav";

const MobileSideNav = () => {
  const { Onclose } = useMobileSideNav();

  function closeNav() {
    Onclose();
  }
  return (
    <Backdrop onClose={closeNav}>
      <MobileSideBar />
    </Backdrop>
  );
};

export default MobileSideNav;
