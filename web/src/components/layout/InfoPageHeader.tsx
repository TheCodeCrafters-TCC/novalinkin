import { StyledInfoPage_ } from "@/styles/components/styled";
import React from "react";
import { VscSettings } from "react-icons/vsc";

const InfoPageHeader = () => {
  return (
    <StyledInfoPage_>
      <VscSettings size={32} />
    </StyledInfoPage_>
  );
};

export default InfoPageHeader;
