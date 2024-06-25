import React from "react";
import styled, { keyframes } from "styled-components";
import { SkeletonProps } from "../types";

const SkeletonImage: React.FC<SkeletonProps> = ({
  height,
  width,
  borderradius,
  style,
}) => {
  return (
    <SkeletonImageLoad
      style={{
        ...style,
        height: height,
        width: width,
        borderRadius: borderradius,
      }}
    />
  );
};

export default SkeletonImage;

const loadingAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonElement = styled.div`
  background: #e0e0e0;
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #f5f5f5 40px,
    #e0e0e0 80px
  );
  background-size: 200px 100%;
  animation: ${loadingAnimation} 1.5s infinite linear;
  border-radius: 4px;
  width: 100%;
  height: auto;
`;

const SkeletonImageLoad = styled(SkeletonElement)`
  width: inherit;
  height: inherit;
  border-radius: inherit;
`;
