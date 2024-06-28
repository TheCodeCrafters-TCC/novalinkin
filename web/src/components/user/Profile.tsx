import React, { startTransition, useEffect, useState } from "react";
import { ContentWrapper, FeedWrapper } from "@/styles/components/styled";
import dynamic from "next/dynamic";
import { Divider } from "@/lib";

const Hero = dynamic(() => import("./Hero"), { ssr: false });
const Interactions = dynamic(() => import("./Interactions"), { ssr: false });
const UserInfo = dynamic(() => import("./Info"), { ssr: false });

export interface ProfileProps {
  isfetching?: boolean;
}

const Profile: React.FC<ProfileProps> = () => {
  const [isfetching, setIsFetching] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setIsFetching(true);
      setTimeout(() => {
        setIsFetching(false);
      }, 4000);
    });
  }, []);

  return (
    <ContentWrapper className="__profile_page">
      <Hero isfetching={isfetching} />
      <UserInfo isfetching={isfetching} />
      <Divider />
      <Interactions isfetching={isfetching} />
    </ContentWrapper>
  );
};

export default Profile;
