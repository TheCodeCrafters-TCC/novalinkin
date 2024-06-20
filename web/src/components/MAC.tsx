import { MobileAuthCofirmWrap } from "@/styles/components/styled";
import { colors, poppins } from "@/styles/global";
import React from "react";
import { MdCheckCircle, MdOutlineRadioButtonUnchecked } from "react-icons/md";

interface CheckProps {
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const MAC = ({ check, setCheck }: CheckProps) => {
  return (
    <MobileAuthCofirmWrap className={poppins.className}>
      {check ? (
        <MdCheckCircle
          onClick={() => setCheck(!check)}
          color={colors.primaryColor}
          size={18}
        />
      ) : (
        <MdOutlineRadioButtonUnchecked
          onClick={() => setCheck(!check)}
          color={colors.primaryColor}
          size={18}
        />
      )}
      <p>
        I have read and agreed to the <span>Teams & Conditions</span>
      </p>
    </MobileAuthCofirmWrap>
  );
};

export default MAC;
