import { InfoIconsWrap, InFlex, InfoTag } from "@/styles/components/styled";
import React from "react";
import { CommunityInterface } from "./Profile";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import { poppins, poppinsNormal } from "@/styles/global";
import { useCRequestsModal } from "@/context/useCRequest";
import { useAppDispatch } from "@/hooks/state";
import { fetchJoinRequest } from "@/redux/thunks/community";

const AdminAction = ({ community }: CommunityInterface) => {
  const { onOpen } = useCRequestsModal();

  function open() {
    onOpen();
  }
  return (
    <InfoIconsWrap style={{ color: "blue" }}>
      <InFlex style={{ cursor: "pointer" }} onClick={open}>
        <FaBuildingCircleArrowRight size={20} />
        <InfoTag className={poppins.className}>Requests:</InfoTag>
        <InfoTag className={poppinsNormal.className}>
          {community.joinRequest.length}
        </InfoTag>
      </InFlex>
    </InfoIconsWrap>
  );
};

export default AdminAction;
