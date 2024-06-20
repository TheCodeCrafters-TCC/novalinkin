import { infoData } from "@/data/info";
import { AuthCofirmWrap, AuthInfoWrap } from "@/styles/components/styled";
import { colors, pollerOne } from "@/styles/global";
import { Poppins } from "next/font/google";
import React from "react";
import { MdCheckCircle, MdOutlineRadioButtonUnchecked } from "react-icons/md";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

interface CheckProps {
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const Info = ({ check, setCheck }: CheckProps) => {
  return (
    <AuthInfoWrap>
      <h1 className={poppins.className}>Welcome Onboard</h1>
      <p className={`info-tag ${poppins.className}`}>{infoData.wel}</p>

      <AuthCofirmWrap className={poppins.className}>
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
      </AuthCofirmWrap>
    </AuthInfoWrap>
  );
};

export default Info;

{
  /* <span className={pollerOne.className}>Connectify</span> */
}
