import { AuthInput, PasswordInput, Button } from "@/lib";
import { QText } from "@/lib/styles/styled";
import { AuthInputContainer } from "@/styles/components/styled";
import { poppins } from "@/styles/global";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdAlternateEmail, MdPassword } from "react-icons/md";

const LoginInputs = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const isLoading = false;
  const emailIcon = <MdAlternateEmail size={25} />;
  const passwordIcon = <MdPassword size={25} />;
  return (
    <AuthInputContainer>
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
        label="Login"
        variant="linear"
        radius="sm"
        width="auto"
        Loading={isLoading}
        disabled={isLoading}
      />
      <QText className={poppins.className}>
        <span onClick={() => router.push("/auth/forgotpassword")}>
          Forgot password?
        </span>
      </QText>
      <QText className={poppins.className}>
        <p>
          Already have an account?
          {""}
          <span onClick={() => router.push("/auth/register")}> Sign-Up</span>
        </p>
      </QText>
    </AuthInputContainer>
  );
};

export default LoginInputs;
