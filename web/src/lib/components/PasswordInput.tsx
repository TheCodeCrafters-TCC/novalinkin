import React, { useState } from "react";
import { AuthInputType } from "../types";
import {
  AInput,
  AInputContainer,
  AInputWrapper,
  ALabel,
} from "../styles/styled";
import { colors, poppins } from "@/styles/global";
import ValidatorText from "./ValidatorText";

const PasswordInput: React.FC<AuthInputType> = ({
  type,
  value,
  onValueChange,
  disabled,
  placeholder,
  label,
  icon,
  Reqlength,
  validCase,
  validChar,
}) => {
  const [val, setVal] = useState(false);
  function setBor() {
    setVal(true);
  }
  function UnsetBor() {
    setVal(false);
  }
  const showBorder = val ? `2px solid ${colors.primaryColor}` : "";

  return (
    <AInputWrapper>
      <ALabel className={poppins.className}>{label}</ALabel>
      <AInputContainer
        style={{ border: showBorder }}
        onMouseEnter={setBor}
        onMouseLeave={UnsetBor}
      >
        {icon}
        <AInput
          value={value}
          onChange={onValueChange}
          disabled={disabled}
          type={type}
          className={poppins.className}
          placeholder={placeholder}
        />
      </AInputContainer>
      {/* <ValidatorText
        label="*Password should be min of 6*"
        error={!Reqlength}
        valid={Reqlength}
      /> */}
      {/* <ValidatorText
        label="*Password must contain one UpperCase*"
        error={!validCase}
        valid={validCase}
      /> */}
      {/* <ValidatorText
        label="*Password must contain Special character*"
        error={!validChar}
        valid={validChar}
      /> */}
    </AInputWrapper>
  );
};

export default PasswordInput;
