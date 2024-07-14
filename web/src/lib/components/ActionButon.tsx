import { IconWrap, colors } from "@/styles/global";
import React, { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import { ActionButtonProps } from "@/types";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { CgComment } from "react-icons/cg";
import { MdInsertChart } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

const getIcon = (variant: ActionButtonProps["variant"], isBold?: boolean) => {
  switch (variant) {
    case "like":
      return {
        icon: isBold ? <IoMdHeart size={18} /> : <IoMdHeartEmpty size={18} />,
        color: colors.primaryRed,
      };
    case "comments":
      return { icon: <CgComment size={18} />, color: colors.primaryColor };
    case "views":
      return { icon: <MdInsertChart size={18} /> };
    case "star":
      return { icon: <FaStar size={18} />, color: colors.star500 };
  }
};

// const getColors

const ActionButon: React.FC<ActionButtonProps> = ({
  data,
  icon,
  onActionClick,
  title,
  variant,
  isBold,
}) => {
  const [viewTitle, setViewTitle] = useState(false);

  function onView() {
    setViewTitle(true);
  }

  function outView() {
    setViewTitle(false);
  }
  return (
    <IconWrap>
      {viewTitle && <Title title={title} styles={{ marginTop: 20 }} />}
      <StyledClick
        style={{ color: getIcon(variant).color }}
        onClick={onActionClick}
        onMouseEnter={onView}
        onMouseLeave={outView}
      >
        {getIcon(variant, isBold)?.icon}
        <p>{data}</p>
      </StyledClick>
    </IconWrap>
  );
};

export default ActionButon;

const StyledClick = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  &:hover {
    cursor: pointer;
  }
  p {
    font-size: 11px;
  }
`;
