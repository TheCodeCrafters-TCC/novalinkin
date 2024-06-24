import { colors, poppins } from "@/styles/global";
import React from "react";
import styled from "styled-components";
import { ValidatorProps } from "../types";

const getColor = (
  error: ValidatorProps["error"],
  valid: ValidatorProps["valid"]
) => {
  if (error) {
    return colors.primaryRed;
  } else if (valid) {
    return "rgb(34 197 94)";
  } else {
    return colors.primaryRed;
  }
};

const ValidatorText: React.FC<ValidatorProps> = ({ error, valid, label }) => {
  return (
    <>
      <VaildateError
        style={{ color: getColor(error, valid) }}
        className={poppins.className}
      >
        {label}
      </VaildateError>
    </>
  );
};

export default ValidatorText;

const VaildateError = styled.p`
  font-size: 13px;
  /* color: ${colors.primaryRed}; */
`;

const styles = {
  error: {
    color: colors.primaryRed,
  },
};
