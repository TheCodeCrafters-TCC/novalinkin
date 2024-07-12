import React, { useState } from "react";
import { AuthInputType } from "../types";
import {
  AInput,
  AInputContainer,
  AInputWrapper,
  ALabel,
} from "../styles/styled";
import { colors, poppins } from "@/styles/global";
import styled from "styled-components";

const AuthInput: React.FC<AuthInputType> = ({
  type,
  value,
  onValueChange,
  disabled,
  placeholder,
  label,
  icon,
  invalidMail,
  name,
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
          name={name}
        />
      </AInputContainer>
      {invalidMail ? (
        <VaildateError className={poppins.className}>
          * Invalid mail *
        </VaildateError>
      ) : (
        ""
      )}
    </AInputWrapper>
  );
};

export default AuthInput;

const VaildateError = styled.p`
  font-size: 13px;
  color: ${colors.primaryRed};
`;
