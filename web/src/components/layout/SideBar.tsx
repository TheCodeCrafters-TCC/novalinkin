import { NavLinksWrapper, SideBarContainer } from "@/styles/components/styled";
import { colors, getDevice } from "@/styles/global";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { sidenavlink } from "@/constants/nav";
import { useRouter } from "next/navigation";
import { Button, NotIcon } from "@/lib";
import { TbLogin, TbScriptPlus } from "react-icons/tb";
import { useArticleModal } from "@/context/useArticlesModal";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { getUnreadNot } from "@/helper/get";
import { setUnread } from "@/redux/notificationSlice";

const SideBar = () => {
  const router = useRouter();
  const { onOpen } = useArticleModal();
  const auth = useAppSelector((state) => state.auth);
  const [notifications, setNotifications] = useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getRes = async () => {
      const res = await getUnreadNot(auth.userId);
      dispatch(setUnread(res));
      setNotifications(res);
    };
    getRes();
  }, [notifications]);

  function handleShare() {
    if (auth.userLoaded) {
      onOpen();
    } else {
      router.replace("/auth/login");
    }
  }
  return (
    <SideBarContainer>
      <FixedNav className="side_nav">
        <NavLinksWrapper>
          {sidenavlink.map((nav, index) => (
            <Nav
              url={nav.url}
              icon={nav.icon}
              label={nav.label}
              push={router.push}
              isModal={nav.isModal}
              isProfile={nav.isProfile}
              hasicon={nav.hasIcon}
              hasToast={nav.hasToast}
              iconVariant={nav.iconVariant}
              totalNot={notifications?.length}
              key={index}
            />
          ))}
          <Button
            label={auth.userLoaded ? "Share article" : "Login"}
            variant="primary"
            radius="sm"
            width="100%"
            className="__share_btn"
            onActionClick={handleShare}
          />
          {auth.userLoaded ? (
            <TbScriptPlus
              className="_mobile_share_article __nav_unactive"
              size={35}
              onClick={handleShare}
            />
          ) : (
            <TbLogin
              className="_mobile_share_article __nav_unactive"
              size={35}
              onClick={handleShare}
            />
          )}
        </NavLinksWrapper>
      </FixedNav>
    </SideBarContainer>
  );
};

export default SideBar;

const FixedNav = styled.nav`
  position: fixed;
  width: 338px;
  background: ${({ theme }) => theme.colors.background};
  height: 100%;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  z-index: 80;

  .__share_btn {
    position: absolute;
    bottom: 4.5rem;
  }

  @media screen and (max-width: ${getDevice("dxxl")}) {
    width: 450px;

    ._mobile_share_article {
      display: none;
    }
  }
  @media screen and (max-width: ${getDevice("dxl")}) {
    width: 410px;
  }
  @media screen and (max-width: ${getDevice("dlg")}) {
    width: 380px;
  }
  @media screen and (max-width: ${getDevice("dxs")}) {
    width: 338px;
    margin-top: -0.4rem;

    .__share_btn {
      bottom: 2.8rem;
    }
  }
  @media screen and (max-width: ${getDevice("xl")}) {
    width: 90px;

    .__share_btn {
      display: none;
    }
    ._mobile_share_article {
      display: block;
      padding: 5px;
      border-radius: 7px;
      cursor: pointer;
    }
  }
`;
