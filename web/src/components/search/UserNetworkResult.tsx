import React from "react";
import { SearchProps } from "./interface";
// import { Users } from "@/constants/user";
import { ResultContainer } from "@/styles/components/styled";
import N_ResultItem from "./N_ResultItem";
import { useAppSelector } from "@/hooks/state";
import { Empty } from "@/lib";

const UserNetworkResult: React.FC<SearchProps> = ({ searchQuery }) => {
  const Users = useAppSelector((state) => state.user.users);
  const filteredNetwork = Users.filter((user) => {
    const name = user.firstName + " " + user.lastName;
    const Name = name.toLowerCase();
    const queried = searchQuery?.toLowerCase();
    return queried && Name.includes(queried);
  });
  const notmatch = searchQuery && filteredNetwork.length < 1;
  return (
    <ResultContainer>
      {/* Recent search here */}
      {notmatch ? (
        <Empty
          label={`No result match your input <strong>${searchQuery}</strong>`}
        />
      ) : (
        filteredNetwork.map((user, index) => (
          <N_ResultItem user={user} key={index} />
        ))
      )}
    </ResultContainer>
  );
};

export default UserNetworkResult;
