import { createReducer } from "@reduxjs/toolkit";
import { useContext } from "react";
import { context } from "../app/index";


export const authReducer = createReducer(
  {},
  {

    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data.user;
      state.message = action.payload.data.message;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.data;
    },

    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state = null, action) => {

      ////('reg')
      ////(action.payload.data.user);
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data.user;
      //(state.user);
      //a.setState('hii')
      state.message = action.payload.data.message;

    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.data;
    },

    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      ////('load')
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      ////(action.payload);
    },
    loadUserFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.data;
    },

    loadProfileRequest: (state) => {
      state.loading = true;
    },
    loadProfileSuccess: (state, action) => {
      ////('load')
      state.loading = false;
      state.isAuthenticated = true;
      state.profile = action.payload.profile;
      ////(action.payload);
    },
    loadProfileFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.data;
    },

    deleteProfileRequest: (state) => {
      state.loading = true;
    },
    deleteProfileSuccess: (state, action) => {
      ////('load')
      state.loading = false;
      state.isAuthenticated = true;
      ////(action.payload.profile)
      ////(action.payload);
    },
    deleteProfileFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.data;
    },

    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    },
    logoutFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload.data;
    },

    verificationRequest: (state) => {
      state.loading = true;
    },
    verificationSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.data;
    },
    verificationFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.data;
    },

    clearError: (state) => {
      state.error = null;
    },

    clearMessage: (state) => {
      state.message = null;
    },

    updateProfileRequest: (state) => {
      state.loading = true;
    },
    updateProfileSuccess: (state, action) => {
      ////(action.payload)
      state.loading = false;
      state.nameAdd = true;
      state.message = action.payload.message;
    },
    updateProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.data;
    },
    addProfileRequest: (state) => {
      state.loading = true;
    },
    addProfileSuccess: (state, action) => {
      state.loading = false;
      state.nameAdd = true;
      state.message = action.payload.data;
    },
    addProfileFailure: (state, action) => {

      state.loading = false;
      state.error = action.payload.data;
    },
  }
);


