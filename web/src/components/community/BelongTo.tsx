import { commMsg } from "@/constants/system";
import { useAppSelector } from "@/hooks/state";
import { SkeletonImage } from "@/lib";
import {
  BelongedContainer,
  BelongedWrapper,
  EmptyCommunity,
  InCommunityImage,
} from "@/styles/components/styled";
import { poppins, poppinsSemibold } from "@/styles/global";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface BelongProps {
  isfetching?: boolean;
}

const BelongTo: React.FC<BelongProps> = ({ isfetching }) => {
  const scrollContainerRef = useRef<any>();
  const router = useRouter();
  const belongdata = useAppSelector((state) => state.community.belongTo);

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
            <SkeletonImage height={loadWidth} width={loadWidth} />
            <SkeletonImage height={loadWidth} width={loadWidth} />
            <SkeletonImage height={loadWidth} width={loadWidth} />
          </>
        )}
        {!isfetching && belongdata.length < 1 ? (
          <EmptyCommunity>
            <h2 className={poppinsSemibold.className}>
              {commMsg.belonged_header}
            </h2>
            <p className={poppins.className}>{commMsg.belonged_text}</p>
          </EmptyCommunity>
        ) : (
          belongdata.map((cm, index) => (
            <InCommunityImage
              src={cm?.communityProfile?.url}
              alt="Community"
              priority
              key={index}
              width={100}
              height={100}
              onClick={() => router.push(`/community/${cm.communitySlug}`)}
            />
          ))
        )}
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
