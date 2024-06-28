import React from "react";
import { Styled_Backdrop } from "../styles/styled";
import { BackdropProps } from "../types";

const Backdrop: React.FC<BackdropProps> = ({ onClose, children }) => {
  return <Styled_Backdrop onClick={onClose}>{children}</Styled_Backdrop>;
};

export default Backdrop;
