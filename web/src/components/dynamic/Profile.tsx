import { useAppSelector } from "@/hooks/state";
import { DSearch } from "@/lib";
import { DynamicWrap } from "@/styles/global";
import React from "react";
import UsersConnections from "../user/connect/UsersConnections";

const Profile = () => {
  const queryState = useAppSelector((state) => state.system.query.profileSlug);
  return (
    <DynamicWrap>
      <DSearch
        placeholder="Search Connection"
        queryPage={`profile/${queryState}/connections`}
        isProfile
      />
      <UsersConnections />
    </DynamicWrap>
  );
};

export default Profile;
