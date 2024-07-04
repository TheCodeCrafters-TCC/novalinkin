import { AuthInput, Button, PasswordInput } from "@/lib";
import { QText } from "@/lib/styles/styled";
import { AuthInputContainer } from "@/styles/components/styled";
import { poppins } from "@/styles/global";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaAddressCard } from "react-icons/fa";
import { MdAlternateEmail, MdEditSquare, MdPassword } from "react-icons/md";
import MAC from "../MAC";
import { useAppDispatch, useAppSelector } from "@/hooks/state";
import { holdInfo } from "@/redux/authSlice";
import { onToast } from "@/lib/components/ToastContainer";
import { SignUp } from "@/redux/thunks/auth";

const ImgPath =
  "https://res.cloudinary.com/dv4mozbaz/image/upload/v1720055040/Placeholder_e1sths.png";
// const ImgPath = "../../assets/Placeholder.png";

interface CheckProps {
  checked: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthInputs = ({ checked, setCheck }: CheckProps) => {
  const [base64Image, setBase64Image] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(ImgPath);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onloadend = () => {
          setBase64Image(reader.result as string);
        };

        reader.readAsDataURL(blob);
      } catch (error) {
        console.error("Error fetching the image:", error);
      }
    };

    fetchImage();
  }, [base64Image]);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const image = ImgPath;
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // image: image,
  });

  const inval =
    !form.email || !form.firstName || !form.lastName || !form.password;
  const invalidMail = form.email && !form.email.includes("@gmail.com");
  const upperCase = /[A-Z]/;
  const specialChar = /[!#$@,.:*&]/;
  const Reqlength = form.password.length >= 6;
  const validChar = specialChar.test(form.password);
  const user = useAppSelector((state) => state.auth);

  function signUp() {
    if (!checked) {
      onToast("info", "Please accept T&C", "top-right");
    } else if (inval) {
      onToast("error", `All fileds are required`, "top-right");
    } else if (!Reqlength || invalidMail) {
      if (!Reqlength) {
        onToast("error", "Password should be min of 6", "top-right");
      } else {
        onToast("error", "Please enter a vlid email", "top-right");
      }
    } else {
      dispatch(SignUp({ form, image }));
      setTimeout(() => {
        onToast("success", "OTP have been sent", "top-right");
        router.push(`/auth/register?stage=verification&email=${form.email}`);
      }, 3000);
    }
  }

  // function signUp(e: React.ChangeEvent) {
  //   e.preventDefault();
  //   if (!checked) {
  //     onToast("info", "Please accept T&C", "top-right");
  //   } else {
  //     dispatch(SignUp({ form, image }));
  //     console.log("form:", form);
  //   }
  // }

  const isLoading = user.registerStatus === "pending";
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
        width="inherit"
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
