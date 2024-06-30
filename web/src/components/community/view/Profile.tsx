import { ContentWrapper } from "@/styles/components/styled";
import React from "react";
import Hero from "./Hero";
import Articles from "./Articles";
import Info from "@/components/user/Info";
import { Divider } from "@/lib";
import Header from "./Header";

const Profile = () => {
  return (
    <ContentWrapper>
      <Header />
      <Hero />
      <Info />
      <Divider />
      <Articles />
    </ContentWrapper>
  );
};

export default Profile;
