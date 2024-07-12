import { InfoContainer, InfoFlexBox } from "@/styles/components/styled";
import React, { useEffect, useState } from "react";
import { CommunityInterface } from "./Profile";
import { Button, SkeletonImage, TruncateText } from "@/lib";
import {
  colors,
  FlexBetween,
  poppinsNormal,
  poppinsSemibold,
} from "@/styles/global";
import { MdVerified } from "react-icons/md";
import Platform from "./Platform";
import AdminAction from "./AdminAction";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { joinCommunity, leaveCommunity } from "@/redux/thunks/community";
import { RequestProps } from "@/types";
import { getCurrentReq } from "@/helper/get";

const Info = ({ isfetching, community }: CommunityInterface) => {
  const auth = useAppSelector((state) => state.auth);
  const communityState = useAppSelector((state) => state.community);
  const isLoading = communityState.join_status === "pending";
  const isLeaving = communityState.leave_status === "pending";
  const dispatch = useAppDispatch();
  const isMember = community.members?.includes(auth?.userId);
  const [request, setRequest] = useState<RequestProps>();
  const receiverId = community._id;
  const connectionRequest = auth.userId;

  useEffect(() => {
    const fetchReq = async () => {
      const response = await getCurrentReq({ receiverId, connectionRequest });
      setRequest(response);
    };
    fetchReq();
  });

  const getStatus = () => {
    if (request?.status === "Pending") {
      return "Pending";
    } else if (request?.status === "Declined" || !request?.status) {
      return "Join";
    } else if (request.status === "Accepted") {
      return "Leave";
    }
  };

  function leave() {
    dispatch(
      leaveCommunity({ userId: auth.userId, communityId: community._id })
    );
  }
  function join() {
    if (community.members.includes(auth.userId)) {
      leave();
    } else {
      dispatch(
        joinCommunity({ userId: auth.userId, communityId: community._id })
      );
    }
  }
  return (
    <InfoContainer>
      <FlexBetween>
        <InfoFlexBox>
          {isfetching ? (
            <SkeletonImage height="35px" width="150px" borderradius="5px" />
          ) : (
            <h1 className={poppinsSemibold.className}>
              {community.communityName}
            </h1>
          )}
          {isfetching ? (
            <SkeletonImage height="34px" width="30px" borderradius="3px" />
          ) : (
            <>
              {community?.hasCommunityCheck && (
                <MdVerified size={20} color={colors.gold} />
              )}
            </>
          )}
        </InfoFlexBox>
        {isfetching ? (
          <SkeletonImage height="35px" width="110px" borderradius="5px" />
        ) : (
          <>
            {community.ownerId === auth.userId ? null : (
              <>
                {isMember ? (
                  <Button
                    variant="danger"
                    radius="sm"
                    label="Leave"
                    width="100px"
                    height="35px"
                    onActionClick={leave}
                    disabled={isLeaving}
                    Loading={isLeaving}
                  />
                ) : (
                  <Button
                    variant={
                      request?.status === "Accepted" ? "danger" : "primary"
                    }
                    radius="sm"
                    label={getStatus()}
                    width="100px"
                    height="35px"
                    onActionClick={join}
                    disabled={isLoading || request?.status === "Pending"}
                    Loading={isLoading}
                  />
                )}
              </>
            )}
          </>
        )}
      </FlexBetween>
      {isfetching ? (
        <SkeletonImage height="40px" width="100%" borderradius="5px" />
      ) : (
        <TruncateText
          text={community?.communityDesc}
          maxLength={100}
          className={`__desc_tag ${poppinsNormal.className}`}
          showClass={`__desc_tag ${poppinsNormal.className}`}
        />
      )}
      {isfetching ? (
        <SkeletonImage height="25px" width="100%" borderradius="5px" />
      ) : (
        <Platform community={community} />
      )}
      {isfetching ? (
        <SkeletonImage height="25px" width="100%" borderradius="5px" />
      ) : (
        <>
          {auth.userId === community.ownerId && (
            <AdminAction community={community} />
          )}
        </>
      )}
    </InfoContainer>
  );
};

export default Info;
