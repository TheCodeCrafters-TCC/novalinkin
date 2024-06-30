import { useAppDispatch } from "@/hooks/state";
import { setCommunitySlug } from "@/redux/systemSlice";
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

type CommInfoProps = {
  name: string;
  image: StaticImageData;
  desc: string;
  members: number;
  isVerified: boolean;
};

interface ContextProps {
  comm: CommInfoProps;
}

const AllContent: React.FC<ContextProps> = ({
  comm: { name, image, members, desc, isVerified },
}) => {
  const router = useRouter();
  const currentSize: any = global?.window?.innerWidth;
  const mdDesc = desc.length > 50 ? desc.slice(0, 50) + "..." : desc;
  const lgDesc = desc.length > 90 ? desc.slice(0, 90) + "..." : desc;
  const truncatedDesc = currentSize <= 450 ? mdDesc : lgDesc;
  const slug = name
    ?.toLowerCase()
    ?.split(" ")
    ?.map((n) => n.slice(0)?.replace(/\s/g, "-"))
    .join("-");
  const dispatch = useAppDispatch();

  function goTo() {
    dispatch(setCommunitySlug(slug as any));
    router.push(`/community/${slug}`);
  }
  return (
    <AllCommunityWrapper onClick={goTo}>
      <CommImage src={image} alt={name} />
      <CommDetailsWrap>
        <CommInfo>
          <p className={poppinsSemibold.className}>{name}</p>
          {isVerified && <MdVerified size={20} color={colors.gold} />}
        </CommInfo>
        <p className={`${poppins.className} __comm_desc`}>{truncatedDesc}</p>
      </CommDetailsWrap>
    </AllCommunityWrapper>
  );
};

export default AllContent;
