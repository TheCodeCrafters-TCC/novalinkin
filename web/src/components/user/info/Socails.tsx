import { InFlex, InfoIconsWrap } from "@/styles/components/styled";
import { poppinsNormal } from "@/styles/global";
import React from "react";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";

const Socails = () => {
  return (
    <InfoIconsWrap style={{ marginTop: "12px" }}>
      <InFlex className="__link">
        <IoLogoTwitter size={22} />
        <p className={`__desc_tag ${poppinsNormal.className}`}>twitter</p>
        <LuArrowUpRight size={20} />
      </InFlex>
      <InFlex className="__link">
        <IoLogoInstagram size={22} />
        <p className={`__desc_tag ${poppinsNormal.className}`}>instagram</p>
        <LuArrowUpRight size={20} />
      </InFlex>
      <InFlex className="__link">
        <IoLogoLinkedin size={22} />
        <p className={`__desc_tag ${poppinsNormal.className}`}>linkedin</p>
        <LuArrowUpRight size={20} />
      </InFlex>
    </InfoIconsWrap>
  );
};

export default Socails;
