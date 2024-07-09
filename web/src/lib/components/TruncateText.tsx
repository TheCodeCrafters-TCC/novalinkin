import React, { useState } from "react";
import { TruncateTextProps } from "../types";
import styled from "styled-components";

function TruncateText({
  text,
  maxLength,
  className,
  showClass,
}: TruncateTextProps) {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const truncatedText =
    text?.length > maxLength ? text?.slice(0, maxLength) + "..." : text;

  return (
    <FlexTruncate>
      <p className={className}>{isTruncated ? truncatedText : text}</p>
      {text?.length > maxLength && (
        <StyledTrunTag className={showClass} onClick={toggleTruncate}>
          {isTruncated ? "Show more" : "Show less"}
        </StyledTrunTag>
      )}
    </FlexTruncate>
  );
}

export default TruncateText;

const FlexTruncate = styled.div`
  display: inline;
`;

const StyledTrunTag = styled.p`
  text-decoration: underline;
  cursor: pointer;
`;
