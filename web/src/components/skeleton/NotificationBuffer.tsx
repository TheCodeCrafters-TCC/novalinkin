import { SkeletonImage } from "@/lib";
import { getDevice } from "@/styles/global";
import React from "react";
import styled from "styled-components";

const NotificationBuffer = () => {
  return (
    <Container>
      <SkeletonImage width="25px" height="25px" borderradius="8px" />
      <SecondLayer>
        <LayerOne>
          <ImagesWrap>
            {/* {Images.map((img, index) => ( */}
            <SkeletonImage width="45px" height="45px" borderradius="9999px" />
            {/* ))} */}
          </ImagesWrap>
          <SkeletonImage width="80%" height="35px" borderradius="9px" />
        </LayerOne>
        <SkeletonImage width="100%" height="25px" borderradius="9px" />
        <SkeletonImage width="80%" height="25px" borderradius="9px" />
        <SkeletonImage width="60%" height="25px" borderradius="9px" />
      </SecondLayer>
    </Container>
  );
};

export default NotificationBuffer;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.nav};
  width: 100%;
  padding: 2rem;

  @media screen and (max-width: ${getDevice("md")}) {
    padding: 1rem;
  }
`;

const LayerOne = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SecondLayer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 85%;
  user-select: none;
`;

const ImagesWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 0;
`;
