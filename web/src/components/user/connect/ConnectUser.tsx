import { Button } from "@/lib";
import {
  SpaceBetween,
  colors,
  poppins,
  poppinsSemibold,
} from "@/styles/global";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { MdVerified } from "react-icons/md";
import styled from "styled-components";

interface CUProps {
  user: any;
  isfetching?: boolean;
}

const ConnectUser: React.FC<CUProps> = ({ user }) => {
  const router = useRouter();
  return (
    <SpaceBetween>
      <FlexUser onClick={() => router.push(`/profile/${user.name}`)}>
        <UserProfile src={user?.image} alt={user.name} />
        <p className={poppinsSemibold.className}>{user.name}</p>
        {user?.isVerified && (
          <MdVerified size={20} color={colors.primaryColor} />
        )}
      </FlexUser>
      <Button
        label="Connect"
        variant="primary"
        radius="sm"
        width="100px"
        height="35px"
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
    transform: translateX(-11px);
  }

  p {
    font-size: 17px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 120px;
  }
`;

const UserProfile = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
