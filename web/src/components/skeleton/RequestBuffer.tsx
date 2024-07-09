import { SkeletonImage } from "@/lib";
import { InfoWrap } from "@/lib/styles/styled";
import { SpaceBetween } from "@/styles/global";
import React from "react";
import styled from "styled-components";

const RequestBuffer = () => {
  return (
    <StyledConnectUser>
      <SkeletonImage width="50px" height="50px" borderradius="25px" />
      <SpaceBetween style={{ width: "90%" }}>
        <InfoWrap>
          <SkeletonImage width="140px" height="30px" borderradius="9px" />
          <SkeletonImage width="25px" height="30px" borderradius="6px" />
        </InfoWrap>
        <InfoWrap>
          <SkeletonImage width="100px" height="30px" borderradius="8px" />
          <SkeletonImage width="100px" height="30px" borderradius="8px" />
        </InfoWrap>
      </SpaceBetween>
    </StyledConnectUser>
  );
};

export default RequestBuffer;
const StyledConnectUser = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: center;
`;
