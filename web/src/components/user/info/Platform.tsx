import { InFlex, InfoIconsWrap, InfoTag } from "@/styles/components/styled";
import { poppins, poppinsNormal } from "@/styles/global";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import { MdArticle } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const Platform = ({ profileInfo }: any) => {
  return (
    <InfoIconsWrap>
      <InFlex>
        <FaRegCalendarAlt size={20} />
        <InfoTag className={poppins.className}>Joined:</InfoTag>
        <InfoTag className={poppinsNormal.className}>
          {profileInfo.joined}
        </InfoTag>
      </InFlex>
      <InFlex>
        <MdArticle size={20} />
        <InfoTag className={poppins.className}>Articles:</InfoTag>
        <InfoTag className={poppinsNormal.className}>
          {profileInfo.articles}
        </InfoTag>
      </InFlex>
      <InFlex>
        <FaLocationDot size={20} />
        <InfoTag className={poppinsNormal.className}>
          {profileInfo.location}
        </InfoTag>
      </InFlex>
      <InFlex>
        <IoPeople size={20} />
        <InfoTag className={poppins.className}>Connections:</InfoTag>
        <InfoTag className={poppinsNormal.className}>
          {profileInfo.connections}
        </InfoTag>
      </InFlex>
      <InFlex className="__link">
        <TbWorld size={20} />
        <InfoTag className={poppins.className}>{profileInfo.website}</InfoTag>
        <LuArrowUpRight size={20} />
      </InFlex>
    </InfoIconsWrap>
  );
};

export default Platform;
