import { Confirmed, SentMail } from "@/assets";
import { numsArray } from "@/constants/nums";
import { infoData } from "@/data/info";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { useToaster } from "@/hooks/useToast";
import { AuthInput, Button } from "@/lib";
import { RingSpinLoader } from "@/lib/components/Loaders";
import { setReturnedUser } from "@/redux/systemSlice";
import { colors, getDevice, poppins } from "@/styles/global";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdOutlinePassword } from "react-icons/md";
import styled from "styled-components";

const OTP = () => {
  const { toast } = useToaster();
  const [otp, setOtp] = useState("");
  const nums = numsArray;
  const [validating, setValidating] = useState(false);
  const otpIcon = <MdOutlinePassword size={25} />;
  const [time, setTime] = useState(nums[0]);
  const [requested, setRequested] = useState(false);
  const router = useRouter();
  const authState = useAppSelector((state) => state.auth.onHold);
  const dispatch = useAppDispatch();

  function handleResendOTP() {
    setRequested(true);
    toast("success", "OTP resent.");
  }

  useEffect(() => {
    if (requested) {
      let currentIndex = 0; // Start with the first index

      // Immediately set the time to the first element to reset the display
      setTime(nums[currentIndex]);

      const timerInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % nums.length;
        setTime(nums[currentIndex]);
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [nums, requested]);

  useEffect(() => {
    setTimeout(() => {
      setRequested(false);
    }, 20000);
  }, [requested]);

  useEffect(() => {
    if (otp.length === 6) {
      setValidating(true);
      //Code validation logic here
      toast("success", "OTP verified.");
      router.push(
        `/auth/register?stage=verification&email=${authState.email}&status=verified`
      );
    }
  }, [otp]);

  const { status } = router.query;

  useEffect(() => {
    if (status === "verified") {
      toast("success", "Account confirmed!");
      dispatch(setReturnedUser());
      router.replace("/");
    }
  }, [status]);

  return (
    <StyledMail className={poppins.className}>
      <>
        {status ? (
          <>
            <StyledSentMail src={Confirmed} priority alt="Account confirmed" />
            <p className={`info-tag ${poppins.className}`}>
              {infoData.confirmed}
            </p>
            <RingSpinLoader size={55} color={colors.primaryColor} />
          </>
        ) : (
          <>
            <StyledSentMail src={SentMail} alt="Mail sent" priority />
            <p className={`info-tag ${poppins.className}`}>
              {infoData.code_sent}
            </p>
            <AuthInput
              value={otp}
              type="number"
              placeholder="Enter OTP"
              icon={otpIcon}
              onValueChange={(e) => setOtp(e.target.value)}
              disabled={validating}
            />
            <ResendWrap>
              <p
                onClick={handleResendOTP}
                className={requested ? "disable__send" : "__resend_btn"}
              >
                Resend
              </p>
              {requested && <span>{time}</span>}
            </ResendWrap>
            <Button
              label="Verify"
              variant="linear"
              radius="sm"
              width="inherit"
              validating={validating}
              className="__verify_btn"
            />{" "}
          </>
        )}
      </>
    </StyledMail>
  );
};

export default OTP;

const StyledMail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-2rem);
  gap: 1rem;
  width: 300px;
  height: 100%;
  position: relative;

  .info-tag {
    font-size: 14px;
    color: #413b3b;
    /* text-align: center; */
    width: 300px;
  }

  @media screen and (max-width: ${getDevice("md")}) {
    width: 315px;
  }
`;

const StyledSentMail = styled(Image)`
  width: 150px;
  height: 150px;
`;

const ResendWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  .__resend_btn {
    font-size: 13px;
    color: ${colors.primaryColor};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .disable__send {
    opacity: 0.5;
    cursor: not-allowed;
    font-size: 13px;
    color: ${colors.primaryColor};
  }
  span {
    font-size: 13px;
  }
`;
