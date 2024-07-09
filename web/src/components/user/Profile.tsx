import React, { startTransition, useEffect, useState } from "react";
import { ContentWrapper, FeedWrapper } from "@/styles/components/styled";
import dynamic from "next/dynamic";
import { Divider } from "@/lib";
import { useAppSelector } from "@/hooks/state";
import { UserTProps } from "@/types";

const Hero = dynamic(() => import("./Hero"), { ssr: false });
const Interactions = dynamic(() => import("./Interactions"), { ssr: false });
const UserInfo = dynamic(() => import("./Info"), { ssr: false });

export interface ProfileProps {
  isfetching?: boolean;
  user?: UserTProps;
  userId?: string;
}

const Profile: React.FC<ProfileProps> = () => {
  const user = useAppSelector((state) => state.user);
  const isfetching = user.fetching_current_status === "pending";
  const auth = useAppSelector((state) => state.auth);

  return (
    <ContentWrapper className="__profile_page">
      <Hero isfetching={isfetching} user={user.currentUser} />
      <UserInfo
        isfetching={isfetching}
        user={user.currentUser}
        userId={auth.userId}
      />
      <Divider />
      <Interactions isfetching={isfetching} />
    </ContentWrapper>
  );
};

export default Profile;
