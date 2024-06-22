import { DSearch } from "@/lib";
import React from "react";
import styled from "styled-components";
import ConnectBar from "../user/connect/ConnectBar";
import { DynamicWrap } from "@/styles/global";

const HomeDynamics = () => {
  return (
    <DynamicWrap>
      <DSearch />
      <ConnectBar />
    </DynamicWrap>
  );
};

export default HomeDynamics;

// const DynamicWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   position: relative;
//   gap: 2rem;
//   margin-bottom: 1rem;
// `;
