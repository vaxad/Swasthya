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
    registerSuccess: (state, action) => {
      
      //console.log(action.payload.data);
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.data.user;
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
      console.log('load')
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      console.log(action.payload);
    },
    loadUserFailure: (state, action) => {
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
      //console.log(action.payload)
      state.loading = false;
      state.message = action.payload.message;
    },
    updateProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.data;
    },
  }
);

// export const messageReducer = createReducer(
//   {},
//   {
//     addTaskRequest: (state) => {
//       state.loading = true;
//     },
//     addTaskSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload.data;
//     },
//     addTaskFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.data;
//     },

//     updateTaskRequest: (state) => {
//       state.loading = true;
//     },
//     updateTaskSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload.data;
//     },
//     updateTaskFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.data;
//     },

//     deleteTaskRequest: (state) => {
//       state.loading = true;
//     },
//     deleteTaskSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload.data;
//     },
//     deleteTaskFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.data;
//     },

//     updateProfileRequest: (state) => {
//       state.loading = true;
//     },
//     updateProfileSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload.data;
//     },
//     updateProfileFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.data;
//     },

//     updatePasswordRequest: (state) => {
//       state.loading = true;
//     },
//     updatePasswordSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload.data;
//     },
//     updatePasswordFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.data;
//     },

//     forgetPasswordRequest: (state) => {
//       state.loading = true;
//     },
//     forgetPasswordSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload.data;
//     },
//     forgetPasswordFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.data;
//     },

//     resetPasswordRequest: (state) => {
//       state.loading = true;
//     },
//     resetPasswordSuccess: (state, action) => {
//       state.loading = false;
//       state.message = action.payload.data;
//     },
//     resetPasswordFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.data;
//     },

//     clearError: (state) => {
//       state.error = null;
//     },

//     clearMessage: (state) => {
//       state.message = null;
//     },
//   }
// );
