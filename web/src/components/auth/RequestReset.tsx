import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { useToaster } from "@/hooks/useToast";
import { AuthInput, Button } from "@/lib";
import { onToast } from "@/lib/components/ToastContainer";
import { QText } from "@/lib/styles/styled";
import { ReqReset } from "@/redux/thunks/auth";
import { AuthInputContainer } from "@/styles/components/styled";
import { poppins } from "@/styles/global";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";

const RequestReset = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const emailIcon = <MdAlternateEmail size={25} />;
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);
  const isLoading = authState.req_reset_status === "pending";
  // const { email } = router.query;

  function reqReset() {
    if (!email) {
      onToast("info", "Email is required", "top-right");
    } else {
      dispatch(ReqReset(email));
      if (
        authState.req_reset_status !== "pending" &&
        authState.req_reset_status !== "failed"
      ) {
        router.push(`/auth/forgotpassword?email=${email}`);
      }
    }
  }

  return (
    <AuthInputContainer>
      <AuthInput
        onValueChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        icon={emailIcon}
        value={email}
        name="email"
      />
      <Button
        label="Request"
        variant="linear"
        radius="sm"
        width="auto"
        Loading={isLoading}
        disabled={isLoading}
        onActionClick={reqReset}
      />
    </AuthInputContainer>
  );
};

export default RequestReset;
