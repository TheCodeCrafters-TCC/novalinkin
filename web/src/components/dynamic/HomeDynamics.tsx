import { DSearch } from "@/lib";
import React from "react";
import styled from "styled-components";

const HomeDynamics = () => {
  return (
    <DynamicWrap>
      <DSearch />
    </DynamicWrap>
  );
};

export default HomeDynamics;

const DynamicWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 3rem;
`;
