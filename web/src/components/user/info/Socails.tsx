import { InFlex, InFlexLink, InfoIconsWrap } from "@/styles/components/styled";
import { poppinsNormal } from "@/styles/global";
import React from "react";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import { ProfileProps } from "../Profile";

const Socails: React.FC<ProfileProps> = ({ user }) => {
  const refUrl = user?.twitter_url && !user.twitter_url?.includes("https");
  const refLinkedinUrl =
    user?.linkedin_url && !user.linkedin_url?.includes("https");
  const twitterUrl = refUrl
    ? `https://${user?.twitter_url}`
    : user?.twitter_url;
  const linkedinUrl = refLinkedinUrl
    ? `https://${user?.linkedin_url}`
    : user?.linkedin_url;
  const twitterUsername = user?.twitter_url?.substring(
    user?.twitter_url?.lastIndexOf("/") + 1
  );
  return (
    <InfoIconsWrap style={{ marginTop: "12px" }}>
      {user?.twitter_url && (
        <InFlexLink href={twitterUrl} target="_blank" className="__link">
          <IoLogoTwitter size={22} />
          <p className={`__desc_tag ${poppinsNormal.className}`}>
            {twitterUsername}
          </p>
          <LuArrowUpRight size={20} />
        </InFlexLink>
      )}
      {user?.linkedin_url && (
        <InFlexLink href={linkedinUrl} target="_blank" className="__link">
          <IoLogoLinkedin size={22} />
          <p className={`__desc_tag ${poppinsNormal.className}`}>linkedin</p>
          <LuArrowUpRight size={20} />
        </InFlexLink>
      )}
    </InfoIconsWrap>
  );
};

export default Socails;
{
  /* <InFlex className="__link">
  <IoLogoInstagram size={22} />
  <p className={`__desc_tag ${poppinsNormal.className}`}>instagram</p>
  <LuArrowUpRight size={20} />
</InFlex> */
}
