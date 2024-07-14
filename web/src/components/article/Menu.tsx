import { AMenuItems, StyledAMenu } from "@/styles/components/styled";
import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { IoLink, IoPrintSharp, IoShareSocialSharp } from "react-icons/io5";
import {
  MdDeleteForever,
  MdGTranslate,
  MdOutlineConnectWithoutContact,
} from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";
import { ArticleProps } from "./Item";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { copyToClip, handleShare } from "@/lib/utils";
import { useRouter } from "next/router";
import { deleteArticle } from "@/redux/thunks/article";
import { onToast } from "@/lib/components/ToastContainer";

interface MenuProps {
  article: ArticleType;
  setIsOpen: any;
}

const Menu = ({ article, setIsOpen }: MenuProps) => {
  const name = `${article.userName}`;
  const truncatedText = name.length > 10 ? name.slice(0, 9) + "..." : name;
  const userId = useAppSelector((state) => state.auth.userId);
  function holdMenu(e: React.MouseEvent) {
    e.stopPropagation();
  }
  const dispatch = useAppDispatch();
  const path = useRouter();
  const current = window.location.href;
  const copy_home = current + `article/${article._id}`;
  // const copy_art_current = current
  const to_copy = path.pathname === "/" ? copy_home : current;

  function deleteA() {
    dispatch(deleteArticle({ userId, articleId: article._id }));
    setIsOpen(false);
  }

  function soon() {
    setIsOpen(false);
    onToast("info", "Not available");
  }

  function share() {
    setIsOpen(false);
    handleShare(article.tag, article.desc, to_copy);
  }
  return (
    <StyledAMenu onClick={holdMenu} className="__a_menu">
      <AMenuItems className="_a_menuItem" onClick={soon}>
        <BsBookmarkFill size={23} />
        <p>Save this article</p>
      </AMenuItems>
      <AMenuItems className="_a_menuItem" onClick={share}>
        <IoShareSocialSharp size={25} />
        <p>Share this article</p>
      </AMenuItems>
      <AMenuItems
        className="_a_menuItem"
        onClick={() => {
          copyToClip(to_copy, "Link");
          setIsOpen(false);
        }}
      >
        <IoLink size={25} />
        <p>Copy link</p>
      </AMenuItems>
      <AMenuItems className="_a_menuItem" onClick={soon}>
        <TbMessageReport color="red" size={25} />
        <p style={styles.report}>Report Article</p>
      </AMenuItems>
      {article.userId === userId && (
        <AMenuItems
          style={{ color: "red" }}
          onClick={deleteA}
          className="_a_menuItem"
        >
          <MdDeleteForever size={25} />
          <p>Delete</p>
        </AMenuItems>
      )}
    </StyledAMenu>
  );
};

export default Menu;

const styles = {
  report: {
    color: "red",
  },
};
