"use client";

import { createSlice } from "@reduxjs/toolkit";

const getData = () => {
  if (window?.localStorage.getItem("userData")) {
    return JSON.parse(window?.localStorage.getItem("userData"));
  }
  return null;
};

const getLogInStatus = () => {
  if (window?.localStorage.getItem("loggedIn")) {
    return true;
  }
  return false;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: getLogInStatus(),
    userData: getData(),
  },
  reducers: {
    logIn: (state, action) => {
      state.loggedIn = true;
      state.userData = action.payload.data;
    },

    logOut: (state) => {
      state.loggedIn = false;
      state.userData = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
