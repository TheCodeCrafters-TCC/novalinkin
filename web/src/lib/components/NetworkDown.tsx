import { Server_Down } from "@/assets";
import { netErrorMsg } from "@/constants/system";
import { poppins, colors } from "@/styles/global";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const NetworkDown = () => {
  const [refresh, setRefresh] = useState(false);
  const router = useRouter();

  function refreshPage() {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
      router.refresh();
    }, 3000);
  }

  return (
    <Container>
      <ErrorImg src={Server_Down} alt="Server_Error" priority />
      <p className={poppins.className}>{netErrorMsg.light_error}</p>
      <Button
        label="Retry"
        variant="primary"
        width="130px"
        height="35px"
        radius="sm"
        Loading={refresh}
        onActionClick={refreshPage}
      />
    </Container>
  );
};

export default NetworkDown;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  gap: 1rem;
  /* max-width: 300px; */
  padding: 2rem;
  justify-content: center;
  align-items: center;

  p {
    color: ${colors.neutral500};
    text-align: center;
  }
`;

const ErrorImg = styled(Image)`
  width: 250px;
  height: 250px;
`;
