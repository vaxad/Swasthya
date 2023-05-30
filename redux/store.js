import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducer } from "./reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

export default store;
