import {
  InFlex,
  InfoIconsWrap,
  InfoLink,
  InfoTag,
} from "@/styles/components/styled";
import { poppins, poppinsNormal } from "@/styles/global";
import { useRouter } from "next/router";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import { MdArticle } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { ProfileProps } from "../Profile";
import { formatDate } from "@/lib/utils";

const Platform: React.FC<ProfileProps> = ({ user }) => {
  const router = useRouter();
  const refUrl = user?.website && !user.website?.includes("https");
  const site = refUrl ? `https://${user?.website}` : user?.website;
  return (
    <InfoIconsWrap>
      <InFlex>
        <FaRegCalendarAlt size={20} />
        <InfoTag className={poppins.className}>Joined:</InfoTag>
        <InfoTag className={poppinsNormal.className}>
          {formatDate(user?.createdAt)}
        </InfoTag>
      </InFlex>
      <InFlex>
        <MdArticle size={20} />
        <InfoTag className={poppins.className}>Articles:</InfoTag>
        <InfoTag className={poppinsNormal.className}>
          {user?.articles?.length}
        </InfoTag>
      </InFlex>
      {user?.location && (
        <InFlex>
          <FaLocationDot size={20} />
          <InfoTag className={poppinsNormal.className}>
            {user?.location}
          </InfoTag>
        </InFlex>
      )}
      <InFlex
        style={{ cursor: "pointer" }}
        onClick={() => router.push(`/profile/${user?.slugName}/connections`)}
      >
        <IoPeople size={20} />
        <InfoTag className={poppins.className}>Networks:</InfoTag>
        <InfoTag className={poppinsNormal.className}>
          {user?.connections?.length}
        </InfoTag>
      </InFlex>
      {user?.website && (
        <InFlex className="__link">
          <TbWorld size={20} />
          <InfoLink href={site} target="_blank">
            <InfoTag className={poppins.className}>{user?.website}</InfoTag>
          </InfoLink>
          <LuArrowUpRight size={20} />
        </InFlex>
      )}
    </InfoIconsWrap>
  );
};

export default Platform;
