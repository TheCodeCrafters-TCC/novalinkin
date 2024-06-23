import React from "react";
import { FeedWrapper } from "@/styles/components/styled";
import dynamic from "next/dynamic";
import { Divider } from "@/lib";

const Hero = dynamic(() => import("./Hero"), { ssr: false });
const Interactions = dynamic(() => import("./Interactions"), { ssr: false });
const UserInfo = dynamic(() => import("./Info"), { ssr: false });

const Profile = () => {
  return (
    <FeedWrapper className="__profile_page">
      <Hero />
      <UserInfo />
      <Divider />
      <Interactions />
    </FeedWrapper>
  );
};

export default Profile;
