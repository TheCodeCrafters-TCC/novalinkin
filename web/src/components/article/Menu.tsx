import { AMenuItems, StyledAMenu } from "@/styles/components/styled";
import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { IoLink, IoPrintSharp, IoShareSocialSharp } from "react-icons/io5";
import { MdGTranslate, MdOutlineConnectWithoutContact } from "react-icons/md";

const Menu = ({ article }: any) => {
  const truncatedText = "";
  return (
    <StyledAMenu className="__a_menu">
      <AMenuItems>
        <MdOutlineConnectWithoutContact size={30} />
        <p>Connect with {article?.userName}</p>
      </AMenuItems>
      <AMenuItems>
        <BsBookmarkFill size={23} />
        <p>Save this article</p>
      </AMenuItems>
      <AMenuItems>
        <IoShareSocialSharp size={25} />
        <p>Share this article</p>
      </AMenuItems>
      <AMenuItems>
        <IoLink size={25} />
        <p>Copy link</p>
      </AMenuItems>
      <AMenuItems>
        <IoPrintSharp size={25} />
        <p>Print</p>
      </AMenuItems>
      <AMenuItems>
        <MdGTranslate size={25} />
        <p>Translate</p>
      </AMenuItems>
    </StyledAMenu>
  );
};

export default Menu;
