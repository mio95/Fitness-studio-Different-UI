import { createSlice } from "@reduxjs/toolkit";
import { getTrainingTypes } from "../traningType/traningTypeThunks";

const initialState = {
  trainingTypes: [],
  loading: false,
  error: null,
};

const trainingSlice = createSlice({
  name: "training",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET TRAINING TYPES
      .addCase(getTrainingTypes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTrainingTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.trainingTypes = action.payload;
      })
      .addCase(getTrainingTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default trainingSlice.reducer;
