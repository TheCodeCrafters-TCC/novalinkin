import { StyledLinksWrapper } from "@/styles/components/styled";
import React from "react";
import MSBLink_Content from "./MSBLink_Content";
import { FaUser } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { HiOutlineSaveAs } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { RiFeedbackFill } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
import { useAppSelector } from "@/hooks/state";

const MSBLinks = () => {
  const icons = {
    profile: <FaUser size={20} />,
    network: <IoPeople size={23} />,
    community: <HiMiniUserGroup size={23} />,
    saved: <HiOutlineSaveAs size={23} />,
    settings: <IoMdSettings size={23} />,
    feedback: <RiFeedbackFill size={23} />,
  };
  const user = useAppSelector((state) => state.auth);
  return (
    <StyledLinksWrapper>
      <MSBLink_Content
        label="Profile"
        url={`/profile/${user.slug}`}
        hasLink
        icon={icons.profile}
      />
      <MSBLink_Content label="Saved" url="" icon={icons.saved} />
      <MSBLink_Content
        label="Community"
        url="/community"
        // hasLink
        icon={icons.community}
      />
      <MSBLink_Content
        label="Settings"
        url=""
        // hasLink
        icon={icons.settings}
      />
      <MSBLink_Content
        label="Network"
        url="/connect"
        hasLink
        icon={icons.network}
      />
      <MSBLink_Content
        label="Feedback"
        url=""
        // hasLink
        icon={icons.feedback}
      />
      <LuLogOut size={25} style={logStyles as any} />
    </StyledLinksWrapper>
  );
};

export default MSBLinks;

const logStyles = {
  position: "absolute",
  bottom: "3rem",
  right: "26px",
};
