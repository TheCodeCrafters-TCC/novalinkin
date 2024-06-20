import { colors } from "@/styles/global";
import { SystemTypes } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

// use global?. when trying to access localstorage

const initialState: SystemTypes = {
  theme: "light",
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
  },
});

export default systemSlice.reducer;

export const { toggleTheme, updateTheme } = systemSlice.actions;
