import { AMenuItems, StyledAMenu } from "@/styles/components/styled";
import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { IoLink, IoPrintSharp, IoShareSocialSharp } from "react-icons/io5";
import { MdGTranslate, MdOutlineConnectWithoutContact } from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";

const Menu = ({ article }: any) => {
  const truncatedText = "";
  function holdMenu(e: React.MouseEvent) {
    e.stopPropagation();
  }
  return (
    <StyledAMenu onClick={holdMenu} className="__a_menu">
      <AMenuItems className="_a_menuItem">
        <MdOutlineConnectWithoutContact size={30} />
        <p>Connect with {article?.userName}</p>
      </AMenuItems>
      <AMenuItems className="_a_menuItem">
        <BsBookmarkFill size={23} />
        <p>Save this article</p>
      </AMenuItems>
      <AMenuItems className="_a_menuItem">
        <IoShareSocialSharp size={25} />
        <p>Share this article</p>
      </AMenuItems>
      <AMenuItems className="_a_menuItem">
        <IoLink size={25} />
        <p>Copy link</p>
      </AMenuItems>
      <AMenuItems className="_a_menuItem">
        <IoPrintSharp size={25} />
        <p>Print</p>
      </AMenuItems>
      <AMenuItems className="_a_menuItem">
        <TbMessageReport color="red" size={25} />
        <p style={styles.report}>Report Article</p>
      </AMenuItems>
    </StyledAMenu>
  );
};

export default Menu;

const styles = {
  report: {
    color: "red",
  },
};
