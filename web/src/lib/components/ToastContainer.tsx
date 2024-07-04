import React, { useState } from "react";
import { ToastContainerProps, ToastProps } from "../types";
import Toast from "./Toast";

let onToast: ToastProps;

const ToastContainer: React.FC<ToastContainerProps> = ({
  variant,
  message,
  position,
}) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(message);
  const [toastVariant, setToastVariant] = useState(variant);
  const [toastPosition, setToastPosition] = useState(position);

  onToast = (
    variant: ToastContainerProps["variant"],
    message: ToastContainerProps["message"],
    position: ToastContainerProps["position"]
  ) => {
    setToastMessage(message);
    setToastVariant(variant);
    setToastPosition(position);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2950); // Hide toast after 3 seconds
  };

  return (
    <>
      <Toast
        toast={toastMessage as any}
        endToast={() => setShowToast(false)}
        showToasT={showToast}
        variant={toastVariant as any}
        position={toastPosition as any}
      />
    </>
  );
};

export default ToastContainer;
export { onToast };
