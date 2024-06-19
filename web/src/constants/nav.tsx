import { AiFillHome } from "react-icons/ai";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { FaBell, FaUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdDynamicFeed, MdExplore } from "react-icons/md";
import { TbScriptPlus } from "react-icons/tb";

export const MobileTabsData = [
  { url: "/", label: "Home", icon: <AiFillHome size={27} /> },
  { url: "/notifications", label: "Notifications", icon: <FaBell size={27} /> },
  { url: "/create", label: "Create", icon: <TbScriptPlus size={30} /> },
  {
    url: "/chats",
    label: "Chats",
    icon: <BsFillChatSquareDotsFill size={27} />,
  },
  { url: "/explore", label: "Explore", icon: <MdExplore size={27} /> },
];

export const sidenavlink = [
  { url: "/", label: "Feed", icon: <MdDynamicFeed size={27} /> },
  { url: "/explore", label: "Explore", icon: <MdExplore size={27} /> },
  { url: "/notifications", label: "Notification", icon: <FaBell size={27} /> },
  {
    url: "/chats",
    label: "Chats",
    icon: <BsFillChatSquareDotsFill size={27} />,
  },
  { url: "/search", label: "Search", icon: <FiSearch size={27} /> },
  {
    url: "/:user",
    label: "Profile",
    icon: <FaUser size={27} />,
    isProfile: true,
  },
  {
    url: "/community",
    label: "Community",
    icon: <HiMiniUserGroup size={27} />,
  },
];
