import { createSlice } from "@reduxjs/toolkit";
import {
  addNewTrainingPacket,
  deleteTrainingPacket,
  getAllTrainingPackages,
} from "../traningPackage/traningPackageThunks";

const initialState = {
  trainingPackages: [],
  loading: false,
  error: null,
};

const trainingSlice = createSlice({
  name: "training",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      //ADD NEW TRAINING PACKET
      .addCase(addNewTrainingPacket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewTrainingPacket.fulfilled, (state, action) => {
        state.loading = false;
        state.trainingPackages = action.payload;
      })
      .addCase(addNewTrainingPacket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //GET ALL TRAINING PACKAGES
      .addCase(getAllTrainingPackages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTrainingPackages.fulfilled, (state, action) => {
        state.loading = false;
        state.trainingPackages = action.payload;
      })
      .addCase(getAllTrainingPackages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //delete training packet
      .addCase(deleteTrainingPacket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTrainingPacket.fulfilled, (state, action) => {
        state.loading = false;
        state.trainingPackages = action.payload;
      })
      .addCase(deleteTrainingPacket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default trainingSlice.reducer;
