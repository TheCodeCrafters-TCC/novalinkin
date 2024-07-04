import { AuthStateProps, FormProps, UserType } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  LoginUser,
  ReqReset,
  ResendOTP,
  SignUp,
  VerifyEmail,
} from "./thunks/auth";
import { onToast } from "@/lib/components/ToastContainer";
import { jwtDecode } from "jwt-decode";

const initialState: AuthStateProps = {
  token: global?.localStorage?.getItem("token") || "",
  firstName: "",
  userId: "",
  lastName: "",
  email: "",
  slug: "",
  userLoaded: false,
  loginStatus: "",
  loginError: "",
  registerStatus: "",
  registerError: "",
  userProfile: "",
  isVerified: false,
  hasVerified_email: false,
  gender: "",
  code: "",
  verifying_mail_error: "",
  verifying_mail_status: "",
  req_res_error: "",
  req_reset_status: "",
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    holdInfo: (state, action: PayloadAction | any) => {
      const form: FormProps = action.payload;
      return {
        ...state,
        onHold: {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
        },
      };
    },
    loadUser: (state: any) => {
      const token = state.token;
      if (token) {
        const user: UserType = jwtDecode(token);

        return {
          ...state,
          token: token,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          isVerified: user.isVerified,
          userProfile: user.userProfile,
          userId: user.userId,
          hasVerified_email: user.hasVerified_email,
          slug: user.slug,
          userLoaded: true,
        };
      }
    },
    updateStatus: (state, action) => {
      const statusType = action.payload;
      state.loginStatus = statusType;
    },
    logOut: (state) => {
      global?.localStorage?.clear();
      onToast("info", "You've logged out");
      if (typeof window !== undefined) {
        window.location.href = "/auth/login";
      }

      return {
        ...initialState,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(LoginUser.pending, (state) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase<any>(LoginUser.fulfilled, (state: any, action) => {
      const token = action.payload;
      global?.localStorage?.setItem("token", token);
      const user: UserType = jwtDecode(token);
      onToast("success", `Welcome back ${user.firstName}`, "top-right");

      return {
        ...state,
        token: token,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isVerified: user.isVerified,
        userProfile: user.userProfile,
        userId: user.userId,
        hasVerified_email: user.hasVerified_email,
        slug: user.slug,
        loginStatus: "successful",
        userLoaded: true,
      };
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      console.log("Error:", action.payload);
      return { ...state, loginStatus: "failed", loginError: action.payload };
    });
    builder.addCase(SignUp.pending, (state) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase<any>(
      SignUp.fulfilled,
      (state: any, action: PayloadAction) => {
        const token: any = action.payload;
        const user: UserType = jwtDecode(token);
        onToast("success", "You're welcome");
        return {
          ...state,
          token: token,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          isVerified: user.isVerified,
          userProfile: user.userProfile,
          userId: user.userId,
          hasVerified_email: user.hasVerified_email,
          slug: user.slug,
          registerStatus: "successful",
          userLoaded: true,
        };
      }
    );
    builder.addCase(SignUp.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "failed",
        registerError: action.payload,
      };
    });
    builder.addCase(ResendOTP.pending, (state, action) => {
      onToast("success", "OTP Sent");
    });
    builder.addCase(ResendOTP.fulfilled, (state, action) => {
      return { ...state, code: action.payload };
    });
    builder.addCase(ResendOTP.rejected, (state, action) => {
      console.log("Something went wrong:", action.payload);
      onToast("error", "Something went wrong");
    });
    builder.addCase(VerifyEmail.pending, (state) => {
      return { ...state, verifying_mail_status: "pending" };
    });
    builder.addCase(VerifyEmail.fulfilled, (state) => {
      onToast("success", "Email has been verified");
      return { ...state, verifying_mail_status: "successful" };
    });
    builder.addCase(VerifyEmail.rejected, (state, action) => {
      return {
        ...state,
        verifying_mail_status: "failed",
        verifying_mail_error: action.payload,
      };
    });
    builder.addCase(ReqReset.pending, (state) => {
      return { ...state, req_reset_status: "pending" };
    });
    builder.addCase(ReqReset.fulfilled, (state) => {
      onToast("success", "Reset Link sent");
      return { ...state, req_reset_status: "successful" };
    });
    builder.addCase(ReqReset.rejected, (state, action) => {
      return {
        ...state,
        req_res_error: action.payload,
        req_reset_status: "failed",
      };
    });
  },
});

export default AuthSlice.reducer;

export const { holdInfo, loadUser, updateStatus, logOut } = AuthSlice.actions;
