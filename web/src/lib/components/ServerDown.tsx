import { Server_Down } from "@/assets";
import { netErrorMsg } from "@/constants/system";
import { colors, poppins } from "@/styles/global";
import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useRouter } from "next/navigation";

const ServerDown = () => {
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
      <p className={poppins.className}>{netErrorMsg.mini_error}</p>
      <Button
        label="Retry"
        variant="primary"
        width="120px"
        height="30px"
        radius="sm"
        Loading={refresh}
        onActionClick={refreshPage}
      />
    </Container>
  );
};

export default ServerDown;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  gap: 1rem;
  max-width: 300px;
  padding: 2rem;
  justify-content: center;
  align-items: center;

  p {
    color: ${colors.neutral500};
    text-align: center;
  }
`;

const ErrorImg = styled(Image)`
  width: 150px;
  height: 150px;
`;
