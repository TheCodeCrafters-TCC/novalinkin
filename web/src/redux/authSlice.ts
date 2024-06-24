import { AuthStateProps } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: AuthStateProps = {
  name: "",
  email: "",
  slug: "",
  profile: "",
  verificationStatus: "",
  userLoaded: false,
  loginStatus: "",
  registerStatus: "",
  userProfile: null,
  isVerified: false,
  gender: "",
  onHold: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
};

interface FormProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

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
  },
  extraReducers(builder) {},
});

export default AuthSlice.reducer;

export const { holdInfo } = AuthSlice.actions;
