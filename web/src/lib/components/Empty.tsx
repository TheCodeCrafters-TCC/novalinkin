import { NoRoom } from "@/assets";
import { getDevice, poppins } from "@/styles/global";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Button from "./Button";

interface EmptyProps {
  label: string;
  type?: "notification" | "user";
  header?: string;
  clickAble?: boolean;
  clickLabel?: string;
  clickAction?: () => void;
  disbaleClick?: boolean;
  style?: React.CSSProperties;
}

// const getImage = (type: EmptyProps['type']) => {

// }

const Empty: React.FC<EmptyProps> = ({
  label,
  type,
  header,
  clickAble,
  clickAction,
  clickLabel,
  disbaleClick,
  style,
}) => {
  return (
    <EmptyContainer style={style}>
      <EmptyImage src={NoRoom} alt="ALT" priority />
      <ActionElement>
        {header && <h2 className={poppins.className}>{header}</h2>}
        <p className={poppins.className}>{label}</p>
        {clickAble && (
          <Button
            label={clickLabel}
            variant="primary"
            radius="sm"
            width="130px"
            height="35px"
            onActionClick={clickAction}
            disabled={disbaleClick}
          />
        )}
      </ActionElement>
    </EmptyContainer>
  );
};

export default Empty;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  position: relative;

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.nav};
    text-align: center;
  }

  h2 {
    font-size: 19px;
  }

  @media screen and (max-width: ${getDevice("md")}) {
    margin-top: 3rem;
  }
`;

const EmptyImage = styled(Image)`
  width: 190px;
  height: 190px;
`;

const ActionElement = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;
