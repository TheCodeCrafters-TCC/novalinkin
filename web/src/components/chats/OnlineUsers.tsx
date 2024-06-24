import React from "react";
import styled from "styled-components";

const OnlineUsers = () => {
  return (
    <StyledConnect>
      {/* {Users.filter((user) => user.connection > 100)
      .sort((a, b) => a.connection - b.connection)
      .slice(0, 4)
      .map((user, index) => (
        <ConnectUser user={user} key={index} />
      ))} */}
    </StyledConnect>
  );
};

export default OnlineUsers;

const StyledConnect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  width: 350px;
`;
