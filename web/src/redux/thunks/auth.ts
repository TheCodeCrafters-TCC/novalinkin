import { DEV_URL, PRO_URL } from "@/hooks/url";
import { onToast } from "@/lib/components/ToastContainer";
import { FormProps } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginUser = createAsyncThunk(
  "auth/login",
  async (form: FormProps, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${PRO_URL}/auth/sign-in`, {
        email: form.email,
        password: form.password,
      });
      return token?.data;
    } catch (error: any) {
      console.log("err:", error);
      onToast("error", `${error?.response?.data}`, "top-right");
      return rejectWithValue(error?.response?.data);
    }
  }
);

interface Payload {
  form: FormProps;
  image: string | any;
}

export const SignUp = createAsyncThunk(
  "auth/sign-up",
  async ({ form, image }: Payload, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${PRO_URL}/auth/sign-up`, {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
        image: image,
      });
      global?.localStorage?.setItem("token", token?.data);
      return token?.data;
    } catch (error: any) {
      console.log("error:", error);
      onToast("error", `${error?.response?.data}`, "top-right");
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const ResendOTP = createAsyncThunk(
  "auth/resend-otp",
  async (email: string, { rejectWithValue }) => {
    try {
      const code = await axios.post(`${PRO_URL}/auth/send-verification-email`, {
        email,
      });
      return code?.data;
    } catch (error: any) {
      console.log("error:", error);
      onToast("error", `${error?.response?.data}`, "top-right");
      return rejectWithValue(error?.response?.data);
    }
  }
);

interface EProps {
  email: string | any;
  otp: string;
}

export const VerifyEmail = createAsyncThunk(
  "auth/verify-email",
  async ({ email, otp }: EProps, { rejectWithValue }) => {
    try {
      const vmail = await axios.patch(`${PRO_URL}/auth/verify-email`, {
        email: email,
        code: otp,
      });
      return vmail?.data;
    } catch (error: any) {
      console.log("error:", error);
      onToast("error", `${error?.response?.data}`, "top-right");
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const ReqReset = createAsyncThunk(
  "auth/req-reset",
  async (email: any, { rejectWithValue }) => {
    console.log("Payload:", email);
    try {
      const reqRes = await axios.post(`${PRO_URL}/auth/forgotten-password/`, {
        email,
      });
      return reqRes?.data;
    } catch (error: any) {
      console.log("err:", error?.response?.data?.email);
      onToast("error", `${error?.response?.data?.email}`, "top-right");
      return rejectWithValue(error?.response?.data?.email);
    }
  }
);
