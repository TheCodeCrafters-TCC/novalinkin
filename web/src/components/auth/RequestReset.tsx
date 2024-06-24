import { useToaster } from "@/hooks/useToast";
import { AuthInput, Button } from "@/lib";
import { QText } from "@/lib/styles/styled";
import { AuthInputContainer } from "@/styles/components/styled";
import { poppins } from "@/styles/global";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";

const RequestReset = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { toast } = useToaster();
  const isLoading = false;
  const emailIcon = <MdAlternateEmail size={25} />;

  function reqReset() {
    if (!email) {
      toast("info", "Email is required", "top-right");
    } else {
      router.push(`/auth/forgotpassword?email=${email}`);
    }
  }

  return (
    <AuthInputContainer>
      <AuthInput
        onValueChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        icon={emailIcon}
        value={email}
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
