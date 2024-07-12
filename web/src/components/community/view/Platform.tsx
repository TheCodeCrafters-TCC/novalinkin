import { InFlex, InfoIconsWrap, InfoTag } from "@/styles/components/styled";
import React from "react";
import { CommunityInterface } from "./Profile";
import { poppins, poppinsNormal } from "@/styles/global";
import { FaRegCalendarAlt } from "react-icons/fa";
import { formatDate } from "@/lib/utils";
import { FaUserShield, FaUsersRectangle } from "react-icons/fa6";
import { MdOutlinePublic } from "react-icons/md";
import { RiChatPrivateLine } from "react-icons/ri";

const Platform = ({ community }: CommunityInterface) => {
  return (
    <InfoIconsWrap>
      <InFlex>
        <FaRegCalendarAlt size={20} />
        <InfoTag className={poppins.className}>Created:</InfoTag>
        <InfoTag className={poppinsNormal.className}>
          {formatDate(community?.createdAt)}
        </InfoTag>
      </InFlex>
      <InFlex>
        <FaUsersRectangle size={20} />
        <InfoTag className={poppins.className}>Members:</InfoTag>
        <InfoTag className={poppinsNormal.className}>
          {community.members.length}
        </InfoTag>
      </InFlex>
      <InFlex>
        <FaUserShield size={20} />
        <InfoTag className={poppins.className}>Admin:</InfoTag>
        <InfoTag className={poppinsNormal.className}>
          {community.isAdmin.length}
        </InfoTag>
      </InFlex>
      <InFlex>
        {community.communityType === "Public" ? (
          <MdOutlinePublic size={20} />
        ) : (
          <RiChatPrivateLine size={20} />
        )}
        <InfoTag className={poppinsNormal.className}>
          {community.communityType}
        </InfoTag>
      </InFlex>
    </InfoIconsWrap>
  );
};

export default Platform;
