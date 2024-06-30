import { getDevice, poppins } from "@/styles/global";
import React, { useState } from "react";
import styled from "styled-components";
import { CCOptionsProps } from "../types";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const options = {
  join: ["Open", "Request to join", "Invite only"],
  type: ["Public", "Private"],
};

const getPlaceholder = (variant: CCOptionsProps["variant"]) => {
  switch (variant) {
    case "type":
      return "Select type";
    case "join":
      return "Select option";
  }
};

const getOptions = (variant: CCOptionsProps["variant"]) => {
  switch (variant) {
    case "type":
      return options.type;
    case "join":
      return options.join;
  }
};

const COptions: React.FC<CCOptionsProps> = ({ variant, label }) => {
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function selectOpt(option: string) {
    setSelected(option);
    setIsOpen(false);
  }

  return (
    <Styled_Options className={poppins.className}>
      <p className="__o_name">{label}</p>
      <Styled_Options_Wrap>
        <Styled_Select onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoIosArrowUp size={25} /> : <IoIosArrowDown size={25} />}
          <p className="__o_name">
            {selected ? selected : getPlaceholder(variant)}
          </p>
        </Styled_Select>
        {isOpen && (
          <OptionsWrap>
            {getOptions(variant).map((option, index) => (
              <p
                key={index}
                className="__o_name"
                onClick={() => selectOpt(option)}
              >
                {option}
              </p>
            ))}
          </OptionsWrap>
        )}
      </Styled_Options_Wrap>
    </Styled_Options>
  );
};

export default COptions;

const Styled_Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  .__o_name {
    margin-left: 8px;
    font-size: 13px;
  }
`;

const Styled_Options_Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 85%;
  position: relative;

  @media screen and (max-width: ${getDevice("md")}) {
    width: 100%;
  }
`;

const Styled_Select = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 11px;
  border: 1px solid ${({ theme }) => theme.colors.nav};
  padding: 13px;
  width: auto;
  &:hover {
    cursor: pointer;
  }
`;

const OptionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.nav};
  padding: 16px;
  position: absolute;
  z-index: 50;
  gap: 15px;
  border-radius: 11px;

  &:hover {
    cursor: pointer;
  }
`;
