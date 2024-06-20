import React from "react";

/**
 * Interface for `AUTH` Input
 * @param AuthInputType - contain all required values and attribute to collect `info` safely
 * without prompting breakdown on invalid useCases
 */
export type AuthInputType = {
  type?: string;
  value: string;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder: string;
  label?: string;
  icon: React.ReactElement;
};

/**
 * Properties for the Button component.
 * @param ButtonProps - A custom configured props for using `Next SSR`
 * else components may breakdown
 */
export type ButtonProps = {
  /**
   *  Button text only accept string `values`
   *@param label -  Rendered on the button interface.
   */
  label: string;
  /**
   *@param Loading - Optional boolean to indicate a loading state
   */
  Loading?: boolean;
  /**
   *Optional boolean to indicate if button is been disabled
   */
  disabled?: boolean;
  /**
   *@param onActionClick - Custom interface click event `OnClick` handler
   */
  onActionClick?: () => void;
  /**
   *@param variant - is used to define the background color
   */
  variant: "primary" | "secondary" | "success" | "danger" | "linear";
  /**
   * @param radius - Border radius triming for button interface
   */
  radius: "xs" | "sm" | "md" | "lg" | "xl";
  width: string;
  height?: string;
  className?: React.CSSProperties | string;
};

export type ToastType = {
  /**
   * @param variant - Handles toast type clearification `color` `background`
   */
  variant: "error" | "info" | "success";
  toast: string;
  showToasT: boolean;
  // OnToast: () => void;
  endToast: () => void;
  position:
    | "top-center"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
};

export type NotIconprops = {
  label: number;
  varaint: "primary" | "secondary";
};

export type TruncateProps = {
  text: string;
  maxLength: number;
  className?: React.CSSProperties | string | undefined | any;
  showClass?: React.CSSProperties | string | undefined | any;
};
