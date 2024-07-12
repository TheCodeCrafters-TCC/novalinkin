import { SkeletonImage } from "@/lib";
import {
  AllCommunityWrapper,
  CommDetailsWrap,
  CommImage,
  CommInfo,
} from "@/styles/components/styled";
import React from "react";

const CommunityBuffer = ({}) => {
  return (
    <AllCommunityWrapper style={{ cursor: "not-allowed" }}>
      <SkeletonImage width="100px" height="100px" borderradius="9px" />
      <CommDetailsWrap>
        <CommInfo>
          <SkeletonImage width="150px" height="25px" borderradius="4px" />
          <SkeletonImage width="30px" height="25px" borderradius="4px" />
        </CommInfo>
        <SkeletonImage width="100%" height="35px" borderradius="4px" />
      </CommDetailsWrap>
    </AllCommunityWrapper>
  );
};

export default CommunityBuffer;
