import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/features/auth/authSlice";
import trainingReducer from "../src/features/training/trainingSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    training: trainingReducer,
  },
});

export default store;
