import { ContentWrapper } from "@/styles/components/styled";
import React, { useState } from "react";
import Hero from "./Hero";
import Articles from "./Articles";
import { Divider, Empty } from "@/lib";
import Header from "./Header";
import { useAppSelector } from "@/hooks/state";
import Info from "./Info";
import ConfirmDelete from "./ConfirmDelete";
import UnderDev from "./UnderDev";
import { commMsg } from "@/constants/system";

export interface CommunityInterface {
  isfetching?: boolean;
  community: CommunityType;
}

const Profile = () => {
  const communityState = useAppSelector((state) => state.community);
  const isfetching = communityState.fetching_current_status === "pending";
  const notfound =
    communityState.fetching_current_error === "Community not found";
  const auth = useAppSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContentWrapper>
      <Header
        setIsOpen={setIsOpen}
        community={communityState.currentCommunity}
        userId={auth.userId}
      />
      {notfound ? (
        <Empty
          header="Community Not Found"
          label={commMsg.not_found}
          style={{ marginTop: "8.5rem" }}
        />
      ) : (
        <>
          <Hero
            isfetching={isfetching}
            community={communityState.currentCommunity}
          />
          <Info
            isfetching={isfetching}
            community={communityState.currentCommunity}
          />
          <Divider />
          <UnderDev />
          <ConfirmDelete setIsOpen={setIsOpen} isOpen={isOpen} />
        </>
      )}
    </ContentWrapper>
  );
};

export default Profile;
