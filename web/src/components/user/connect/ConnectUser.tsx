import { Button } from "@/lib";
import { SpaceBetween, colors, poppins } from "@/styles/global";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { MdVerified } from "react-icons/md";
import styled from "styled-components";

const ConnectUser = ({ user }: any) => {
  const router = useRouter();
  return (
    <SpaceBetween>
      <FlexUser onClick={() => router.push(`/profile/${user.name}`)}>
        <UserProfile src={user?.image} alt={user.name} />
        <p className={poppins.className}>{user.name}</p>
        {user?.isVerified && (
          <MdVerified size={25} color={colors.primaryColor} />
        )}
      </FlexUser>
      <Button
        label="Connect"
        variant="primary"
        radius="sm"
        width="100px"
        height="40px"
      />
    </SpaceBetween>
  );
};

export default ConnectUser;

const FlexUser = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  cursor: pointer;

  svg {
    transform: translateX(-7px);
  }

  p {
    font-size: 17px;
    white-space: nowrap; /* Prevents the text from wrapping to the next line */
    overflow: hidden; /* Hides any text that overflows the container */
    text-overflow: ellipsis;
    width: 120px;
  }
`;

const UserProfile = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
