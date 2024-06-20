import React, { useState } from "react";
import { IToast, InfoWrap, StyledToast } from "../styles/styled";
import { ToastType } from "../types";
import { VscError } from "react-icons/vsc";
import { MdErrorOutline, MdOutlineDone } from "react-icons/md";
import { colors, poppins } from "@/styles/global";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";

const getPosition = (position: ToastType["position"]) => {
  switch (position) {
    case "top-left":
      return { left: "16px", top: "10px" };
    case "top-right":
      return { right: "16px", top: "10px" };
    case "bottom-left":
      return { bottom: "10px", left: "16px" };
    case "bottom-right":
      return { bottom: "10px", right: "16px" };
  }
};
const getIcon = (variant: ToastType["variant"]) => {
  switch (variant) {
    case "error":
      return <VscError size={25} color="red" />;
    case "info":
      return <MdErrorOutline size={25} color={colors.primaryColor} />;
    case "success":
      return <MdOutlineDone size={25} color="green" />;
  }
};

const getBackground = (variant: ToastType["variant"]) => {
  switch (variant) {
    case "error":
      return "rgb(252 165 165)";
    case "info":
      return "rgb(59 130 246)";
    case "success":
      return "rgb(34 197 94)";
  }
};

const getColor = (variant: ToastType["variant"]) => {
  switch (variant) {
    case "error":
      return "red";
    case "info":
      return "blue";
    case "success":
      return "green";
  }
};

const Toast: React.FC<ToastType> = ({
  position,
  variant,
  toast,
  showToasT,
  endToast,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [loadWidth, setLoadWidth] = useState("");
  const toasterLoadWith = isHovered ? loadWidth : "auto";
  const loaderRadius = isHovered ? 0 : 10;

  const ToastLoder = styled.div`
    height: 7px;
    width: ${toasterLoadWith};
    transform: translateY(-9.5px);
    border-bottom-right-radius: ${loaderRadius};
    border-bottom-left-radius: 10px;
  `;

  function holdToast() {
    setIsHovered(true);
    const element: HTMLElement | any = document.getElementById("toast_con");
    const currentWidth = window.getComputedStyle(element).width;
    setLoadWidth(currentWidth);
  }
  function leaveToast() {
    setIsHovered(false);
  }
  return (
    <StyledToast
      onMouseEnter={holdToast}
      onMouseLeave={leaveToast}
      style={{
        ...getPosition(position),
        background: getBackground(variant),
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: getColor(variant),
        display: showToasT ? "flex" : "none",
      }}
    >
      <IToast>
        <InfoWrap>
          {getIcon(variant)}
          <p className={poppins.className} style={{ color: getColor(variant) }}>
            {toast}
          </p>
        </InfoWrap>
        <IoClose size={25} onClick={endToast} className="close" />
      </IToast>
      <ToastLoder
        id="toast_con"
        className={isHovered ? "" : "loadToast"}
        style={{
          background: getColor(variant),
          // width: toasterLoadWith,
          // borderBottomRightRadius: loaderRadius,
        }}
      >
        .
      </ToastLoder>
    </StyledToast>
  );
};

export default Toast;
