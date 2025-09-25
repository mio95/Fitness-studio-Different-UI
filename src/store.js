import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/features/auth/authSlice";
import trainingTypeReducer from "../src/features/traningType/traningTypeSlice";
import trainingPackageReducer from "../src/features/traningPackage/traningPackageSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    trainingType: trainingTypeReducer,
    trainingPackage: trainingPackageReducer,
  },
});

export default store;
