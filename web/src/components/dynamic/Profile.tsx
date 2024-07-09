import { useAppSelector } from "@/hooks/state";
import { DSearch, SkeletonImage } from "@/lib";
import { DynamicWrap } from "@/styles/global";
import React, { useEffect, useState } from "react";
import UsersConnections from "../user/connect/UsersConnections";

const Profile = () => {
  const useState = useAppSelector(
    (state) => state.user.fetching_current_status
  );
  const isfetching = useState === "pending";
  const queryState = useAppSelector((state) => state.system.query.profileSlug);
  return (
    <DynamicWrap>
      {isfetching ? (
        <SkeletonImage height="50px" width="350px" borderradius="10px" />
      ) : (
        <DSearch
          placeholder="Search Connection"
          queryPage={`profile/${queryState}/connections`}
          isProfile
        />
      )}
      <UsersConnections isfetching={isfetching} />
    </DynamicWrap>
  );
};

export default Profile;
