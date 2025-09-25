import { createSlice } from "@reduxjs/toolkit";
import { getStatistics } from "./statisticsUserAndTrainingTypeThunks";

const initialState = {
  statistics: [],
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
        console.log(state.statistics);
      })
      .addCase(getStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default statisticsSlice.reducer;
