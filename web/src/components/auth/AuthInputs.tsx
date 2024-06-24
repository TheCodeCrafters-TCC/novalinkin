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
import { useAppDispatch } from "@/hooks/state";
import { holdInfo } from "@/redux/authSlice";

interface CheckProps {
  checked: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthInputs = ({ checked, setCheck }: CheckProps) => {
  const router = useRouter();
  const { toast } = useToaster();
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const inval =
    !form.email || !form.firstName || !form.lastName || !form.password;
  const invalidMail = form.email && !form.email.includes("@gmail.com");
  const upperCase = /[A-Z]/;
  const specialChar = /[!#$@,.:*&]/;
  const Reqlength = form.password.length >= 6;
  // const validCase = upperCase.test(form.password);
  const validChar = specialChar.test(form.password);

  function signUp() {
    if (!checked) {
      toast("info", "Please accept T&C", "top-right");
    } else if (inval) {
      toast("error", `All fileds are required`, "top-right");
    } else if (!Reqlength || !validChar || invalidMail) {
      toast("error", "Please meet the form criteria", "top-right");
    } else {
      dispatch(holdInfo(form as any));
      toast("success", `OTP have been sent`, "top-right");
      router.push(`/auth/register?stage=verification&email=${form.email}`);
    }
  }
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
        type="text"
      />
      <AuthInput
        onValueChange={(e) => setForm({ ...form, lastName: e.target.value })}
        placeholder="Enter last name"
        icon={editIcon}
        value={form.lastName}
        type="text"
      />
      <AuthInput
        onValueChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="Enter email"
        icon={emailIcon}
        type="email"
        value={form.email}
        invalidMail={invalidMail}
      />
      <PasswordInput
        onValueChange={(e) => setForm({ ...form, password: e.target.value })}
        placeholder="Enter your password"
        icon={passwordIcon}
        value={form.password}
        Reqlength={Reqlength}
        // validCase={validCase}
        validChar={validChar}
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
          <span onClick={() => router.push("/auth/login")}> Login</span>
        </p>
      </QText>
      <MAC check={checked} setCheck={setCheck} />
    </AuthInputContainer>
  );
};

export default AuthInputs;
