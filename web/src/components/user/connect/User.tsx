import { Button } from "@/lib";
import {
  ConnectUserImage,
  ConnectUserInfo,
  StyledConnectUser,
} from "@/styles/components/styled";
import {
  SpaceBetween,
  colors,
  poppinsBold,
  poppinsLight,
  poppinsNormal,
} from "@/styles/global";
import React from "react";
import { MdVerified } from "react-icons/md";
import styled from "styled-components";

const User = ({ user }: any) => {
  const text = user.description;
  const maxLength = 90;
  const truncatedDesc =
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  return (
    <SpaceBetween>
      <StyledConnectUser>
        <ConnectUserImage src={user?.image} alt={user.name} priority />
        <ConnectUserInfo>
          <SpaceBetween>
            <InfoWrap>
              <p className={poppinsBold.className}>{user.name}</p>
              {user?.isVerified && (
                <MdVerified size={25} color={colors.primaryColor} />
              )}
            </InfoWrap>
            <Button
              label="Connect"
              variant="primary"
              height="35px"
              radius="sm"
              width="100px"
            />
          </SpaceBetween>
          <span className={poppinsNormal.className}>{truncatedDesc}</span>
        </ConnectUserInfo>
      </StyledConnectUser>
    </SpaceBetween>
  );
};

export default User;

const InfoWrap = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;
