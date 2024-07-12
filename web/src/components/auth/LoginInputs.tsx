import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { AuthInput, PasswordInput, Button } from "@/lib";
import { QText } from "@/lib/styles/styled";
import { setReturnedUser } from "@/redux/systemSlice";
import { LoginUser } from "@/redux/thunks/auth";
import { AuthInputContainer } from "@/styles/components/styled";
import { poppins } from "@/styles/global";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdAlternateEmail, MdPassword } from "react-icons/md";

const LoginInputs = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const emailIcon = <MdAlternateEmail size={25} />;
  const passwordIcon = <MdPassword size={25} />;
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth);
  const isPending = user.loginStatus === "pending";
  const hasFailed = user.loginStatus === "failed";
  const logginError = user.loginError;

  function login() {
    dispatch(LoginUser(form));
  }

  useEffect(() => {
    if (user.token) {
      router.push("/");
      dispatch(setReturnedUser());
    }
  }, [user.token]);

  return (
    <AuthInputContainer>
      <AuthInput
        onValueChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="Enter email"
        icon={emailIcon}
        value={form.email}
        name="email"
      />
      <PasswordInput
        onValueChange={(e) => setForm({ ...form, password: e.target.value })}
        placeholder="Enter your password"
        icon={passwordIcon}
        value={form.password}
        name="password"
      />
      <Button
        label="Login"
        variant="linear"
        radius="sm"
        width="auto"
        Loading={isPending}
        disabled={isPending}
        onActionClick={login}
      />
      {hasFailed && (
        <p className={`__auth_log_error ${poppins.className}`}>{logginError}</p>
      )}
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
