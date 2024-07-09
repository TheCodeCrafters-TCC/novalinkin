import React from "react";
import { SearchProps } from "./interface";
// import { Users } from "@/constants/user";
import { ResultContainer } from "@/styles/components/styled";
import N_ResultItem from "./N_ResultItem";
import { useAppSelector } from "@/hooks/state";

const UserNetworkResult: React.FC<SearchProps> = ({ searchQuery }) => {
  const Users = useAppSelector((state) => state.user.users);
  const filteredNetwork = Users.filter((user) => {
    const name = user.firstName + " " + user.lastName;
    const Name = name.toLowerCase();
    const queried = searchQuery?.toLowerCase();
    return queried && Name.includes(queried);
  });
  return (
    <ResultContainer>
      {/* Recent search here */}
      {filteredNetwork.map((user, index) => (
        <N_ResultItem user={user} key={index} />
      ))}
    </ResultContainer>
  );
};

export default UserNetworkResult;
