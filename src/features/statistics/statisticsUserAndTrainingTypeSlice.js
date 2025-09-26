import { createSlice } from "@reduxjs/toolkit";
import {
  getAllTrainingsByUserId,
  getStatistics,
} from "./statisticsUserAndTrainingTypeThunks";

const initialState = {
  statistics: [],
  statisticsUser: [],
  loading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET STATISTICS
      .addCase(getStatistics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.statistics = action.payload.map(([training, numOfExercises]) => ({
          training, // ovde ostavljamo training objekat koji backend vraća
          numOfExercises,
        }));
      })
      .addCase(getStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET trainings by user and training type
      .addCase(getAllTrainingsByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTrainingsByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.statisticsUser = action.payload.map(
          ([firstName, lastName, startDate, endDate, status]) => ({
            firstName,
            lastName,
            startDate,
            endDate,
            status,
          })
        );
      })
      .addCase(getAllTrainingsByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default statisticsSlice.reducer;
