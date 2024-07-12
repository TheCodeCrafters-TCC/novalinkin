import { useAppDispatch } from "@/hooks/state";
import { setCommunitySlug } from "@/redux/systemSlice";
import { getCommunity } from "@/redux/thunks/community";
import {
  AllCommunityWrapper,
  CommDetailsWrap,
  CommImage,
  CommInfo,
} from "@/styles/components/styled";
import { colors, poppins, poppinsSemibold } from "@/styles/global";
import { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { MdVerified } from "react-icons/md";

interface ContextProps {
  comm: CommunityType;
}

const AllContent: React.FC<ContextProps> = ({
  comm: {
    communityName,
    communityProfile,
    communityDesc,
    hasCommunityCheck,
    communitySlug,
  },
}) => {
  const router = useRouter();
  const currentSize: any = global?.window?.innerWidth;
  const mdDesc =
    communityDesc?.length > 50
      ? communityDesc?.slice(0, 50) + "..."
      : communityDesc;
  const lgDesc =
    communityDesc?.length > 90
      ? communityDesc?.slice(0, 90) + "..."
      : communityDesc;
  const truncatedDesc = currentSize <= 450 ? mdDesc : lgDesc;

  const dispatch = useAppDispatch();

  function goTo() {
    const slug = communitySlug;
    dispatch(setCommunitySlug(communitySlug as any));
    dispatch(getCommunity(slug));
    router.push(`/community/${communitySlug}`);
  }
  return (
    <AllCommunityWrapper onClick={goTo}>
      <CommImage
        src={communityProfile?.url}
        width={100}
        height={100}
        alt={communityName}
      />
      <CommDetailsWrap>
        <CommInfo>
          <p className={poppinsSemibold.className}>{communityName}</p>
          {hasCommunityCheck && <MdVerified size={20} color={colors.gold} />}
        </CommInfo>
        <p className={`${poppins.className} __comm_desc`}>{truncatedDesc}</p>
      </CommDetailsWrap>
    </AllCommunityWrapper>
  );
};

export default AllContent;
