import { AiFillHome } from "react-icons/ai";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { FaBell, FaUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdDynamicFeed, MdExplore } from "react-icons/md";
import { TbScriptPlus } from "react-icons/tb";

export const MobileTabsData = [
  { url: "/", label: "Home", icon: <AiFillHome size={27} /> },
  {
    url: "/notifications",
    hasIcon: true,
    label: "Notifications",
    icon: <FaBell size={27} />,
  },
  { url: "", label: "Create", isModal: true, icon: <TbScriptPlus size={30} /> },
  {
    url: "/chats",
    hasToast: true,
    label: "Chats",
    icon: <BsFillChatSquareDotsFill size={27} />,
  },
  {
    url: "/explore",
    hasToast: true,
    label: "Explore",
    icon: <MdExplore size={27} />,
  },
];

export const sidenavlink = [
  { url: "/", label: "Feed", icon: <MdDynamicFeed size={27} /> },
  {
    url: "/explore",
    hasToast: true,
    label: "Explore",
    icon: <MdExplore size={27} />,
  },
  {
    url: "/notifications",
    hasIcon: true,
    label: "Notification",
    icon: <FaBell size={25} />,
  },
  {
    url: "/chats",
    label: "Chats",
    icon: <BsFillChatSquareDotsFill size={25} />,
    hasIcon: false,
    iconVariant: "primary",
    totalNot: 6,
    hasToast: true,
  },
  {
    url: "/search",
    isModal: true,
    label: "Search",
    icon: <FiSearch size={27} />,
  },
  {
    url: "/profile/[slug]",
    label: "Profile",
    icon: <FaUser size={25} />,
    isProfile: true,
  },
  {
    url: "/community",
    label: "Community",
    hasToast: true,
    icon: <HiMiniUserGroup size={27} />,
  },
];
