import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/features/auth/authSlice";
import userReducer from "../src/features/user/userSlice";
import trainingTypeReducer from "../src/features/traningType/traningTypeSlice";
import trainingPackageReducer from "../src/features/traningPackage/traningPackageSlice";
import statisticsReducer from "../src/features/statistics/statisticsUserAndTrainingTypeSlice";
import membershipReducer from "../src/features/membership/membershipSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    trainingType: trainingTypeReducer,
    trainingPackage: trainingPackageReducer,
    statistics: statisticsReducer,
    membership: membershipReducer,
  },
});

export default store;
