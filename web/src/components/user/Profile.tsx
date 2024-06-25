import React, { useEffect, useState } from "react";
import { FeedWrapper } from "@/styles/components/styled";
import dynamic from "next/dynamic";
import { Divider } from "@/lib";

const Hero = dynamic(() => import("./Hero"), { ssr: false });
const Interactions = dynamic(() => import("./Interactions"), { ssr: false });
const UserInfo = dynamic(() => import("./Info"), { ssr: false });

export interface ProfileProps {
  isfetching: boolean;
}

const Profile: React.FC<ProfileProps> = () => {
  const [isfetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
    }, 4000);
  }, []);

  return (
    <FeedWrapper className="__profile_page">
      <Hero isfetching={isfetching} />
      <UserInfo isfetching={isfetching} />
      <Divider />
      <Interactions isfetching={isfetching} />
    </FeedWrapper>
  );
};

export default Profile;
