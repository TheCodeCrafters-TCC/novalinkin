import { colors } from "@/styles/global";
import { SystemTypes } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// use global?. when trying to access localstorage

const initialState: SystemTypes = {
  theme: "light",
  query: {
    profileSlug: "",
    communitySlug: "",
  },
  currentPage: "",
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }

      global?.localStorage?.setItem("theme", JSON.stringify(state.theme));
    },
    updateTheme: (state) => {
      const storedTheme = global?.localStorage?.getItem("theme");
      state.theme = storedTheme ? JSON.parse(storedTheme) : "light";
    },
    setProfileQuery: (state, action: PayloadAction) => {
      const searched = action.payload;
      state.query.profileSlug = searched;
    },
    setCurrntPage: (state, action: PayloadAction) => {
      const page = action.payload;
      state.currentPage = page;
    },
  },
});

export default systemSlice.reducer;

export const { toggleTheme, updateTheme, setProfileQuery, setCurrntPage } =
  systemSlice.actions;
