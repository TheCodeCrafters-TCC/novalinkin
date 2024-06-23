import { useAppSelector } from "@/hooks/state";
import { DSearch } from "@/lib";
import { DynamicWrap } from "@/styles/global";
import React from "react";
import UsersConnections from "../user/connect/UsersConnections";

const Connections = () => {
  const queryState = useAppSelector((state) => state.system.query.profileSlug);
  return (
    <DynamicWrap>
      <DSearch
        placeholder="Search Connection"
        queryPage={`profile/${queryState}/connections`}
        isConnection
      />
      <UsersConnections />
    </DynamicWrap>
  );
};

export default Connections;
