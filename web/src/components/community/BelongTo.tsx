import { belongdata } from "@/constants/community";
import { SkeletonImage } from "@/lib";
import {
  BelongedContainer,
  BelongedWrapper,
  InCommunityImage,
} from "@/styles/components/styled";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface BelongProps {
  isfetching?: boolean;
}

const BelongTo: React.FC<BelongProps> = ({ isfetching }) => {
  const scrollContainerRef = useRef<any>();

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const canScroll = belongdata.length >= 4;

  const currentWidth = global?.window?.innerWidth;
  const loadWidth = currentWidth <= 450 ? "80px" : "100px";

  return (
    <BelongedWrapper>
      {isfetching ? (
        <SkeletonImage height="40px" width="40px" />
      ) : (
        <> {canScroll && <IoIosArrowBack size={35} onClick={scrollLeft} />}</>
      )}
      <BelongedContainer ref={scrollContainerRef}>
        {isfetching && (
          <>
            <SkeletonImage height={loadWidth} width={loadWidth} />
            {/* <SkeletonImage height={loadWidth} width={loadWidth} /> */}
            <SkeletonImage height={loadWidth} width={loadWidth} />
            <SkeletonImage height={loadWidth} width={loadWidth} />
          </>
        )}
        {!isfetching &&
          belongdata.map((cm, index) => (
            <InCommunityImage
              src={cm.image}
              alt="Community"
              priority
              key={index}
            />
          ))}
      </BelongedContainer>
      {isfetching ? (
        <SkeletonImage height="40px" width="40px" />
      ) : (
        <>
          {canScroll && <IoIosArrowForward size={35} onClick={scrollRight} />}
        </>
      )}
    </BelongedWrapper>
  );
};

export default BelongTo;
