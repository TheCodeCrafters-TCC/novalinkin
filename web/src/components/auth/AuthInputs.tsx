import { AuthInput, Button, PasswordInput } from "@/lib";
import { QText } from "@/lib/styles/styled";
import { AuthInputContainer } from "@/styles/components/styled";
import { poppins } from "@/styles/global";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaAddressCard } from "react-icons/fa";
import { MdAlternateEmail, MdEditSquare, MdPassword } from "react-icons/md";
import MAC from "../MAC";
import { useToaster } from "@/hooks/useToast";

interface CheckProps {
  checked: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthInputs = ({ checked, setCheck }: CheckProps) => {
  const { toast } = useToaster();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function signUp() {
    if (!checked) {
      toast("info", "Please accept T&C", "top-right");
    } else {
      toast("success", `Welcome to Connectify`, "top-right");
    }
  }
  const router = useRouter();
  const isLoading = false;
  const nameIcon = <FaAddressCard size={25} />;
  const editIcon = <MdEditSquare size={25} />;
  const emailIcon = <MdAlternateEmail size={25} />;
  const passwordIcon = <MdPassword size={25} />;
  return (
    <AuthInputContainer>
      <AuthInput
        onValueChange={(e) => setForm({ ...form, firstName: e.target.value })}
        placeholder="Enter first name"
        icon={nameIcon}
        value={form.firstName}
      />
      <AuthInput
        onValueChange={(e) => setForm({ ...form, lastName: e.target.value })}
        placeholder="Enter last name"
        icon={editIcon}
        value={form.lastName}
      />
      <AuthInput
        onValueChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="Enter email"
        icon={emailIcon}
        value={form.email}
      />
      <PasswordInput
        onValueChange={(e) => setForm({ ...form, password: e.target.value })}
        placeholder="Enter your password"
        icon={passwordIcon}
        value={form.password}
      />
      <Button
        label="Sign Up"
        variant="linear"
        radius="sm"
        width="auto"
        Loading={isLoading}
        disabled={isLoading}
        onActionClick={signUp}
      />
      <QText className={poppins.className}>
        <p>
          Already have an account?
          {""}
          <span onClick={() => router.push("/auth/login")}>Login</span>
        </p>
      </QText>
      <MAC check={checked} setCheck={setCheck} />
    </AuthInputContainer>
  );
};

export default AuthInputs;
