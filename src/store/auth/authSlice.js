import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // 'not-authenticated', 'authenticated'
    token: null,
    errorMessage: null,
  },
  reducers: {
    onLogin: (state) => {
      state.status = "authenticated";
      state.errorMessage = null;
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.errorMessage = payload?.errorMessage;
    },
    onChecking: (state) => {
      state.status = "checking";
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    },
  },
});

export const { onLogin, onLogout, onChecking, clearErrorMessage } =
  authSlice.actions;
