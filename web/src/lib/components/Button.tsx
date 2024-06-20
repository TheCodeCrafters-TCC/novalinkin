import React from "react";
import { ButtonProps } from "../types";
import { ButtonInterFace } from "../styles/styled";
import { colors, poppins } from "@/styles/global";
import { ClipLoader } from "react-spinners";

const getBackgroundColor = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "primary":
      return colors.primaryColor;
    case "secondary":
      return colors.black;
    case "success":
      return "green";
    case "danger":
      return "red";
    case "linear":
      return colors.linear;
    default:
      return colors.primaryColor;
  }
};

/**
 * @param radius Case fetch for prefered size
 * @returns selected size.trimBorders()
 */
const getBorderRadius = (radius: ButtonProps["radius"]) => {
  switch (radius) {
    case "sm":
      return "10px";
    case "md":
      return "16px";
    case "lg":
      return "20px";
    case "xl":
      return "26px";
  }
};

/**
 * Represents a button component with customizable properties.
 * @param {ButtonProps} props - The properties for the button component.
 * @returns {JSX.Element} The rendered button component.
 */
const Button: React.FC<ButtonProps> = ({
  label,
  onActionClick,
  Loading,
  disabled,
  width,
  variant,
  radius,
}) => {
  const loadAction = Loading ? "not-allowed" : "pointer";
  if (Loading && typeof Loading !== "boolean") {
    throw new Error("Action failed: Loading props must be assigned to boolean");
  }
  if (onActionClick && typeof onActionClick !== "function") {
    throw new Error("Action terminated: onAction can only be a function");
  }
  return (
    <ButtonInterFace
      disabled={disabled}
      className={poppins.className}
      onClick={onActionClick}
      style={{
        cursor: loadAction,
        background: getBackgroundColor(variant),
        borderRadius: getBorderRadius(radius),
        width: width,
      }}
    >
      {Loading ? <ClipLoader color="white" size={20} /> : label}
    </ButtonInterFace>
  );
};

export default Button;
