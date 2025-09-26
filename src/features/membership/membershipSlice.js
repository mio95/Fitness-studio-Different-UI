import { createSlice } from "@reduxjs/toolkit";
import {
  addMembership,
  getMembershipByUserId,
  searchMembership,
  uploadMembership,
} from "./membershipThunks";

const initialState = {
  memberships: [],
  loading: false,
  error: null,
};

const membershipSlice = createSlice({
  name: "membership",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // ADD MEMBERSHIP
      .addCase(addMembership.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMembership.fulfilled, (state, action) => {
        state.loading = false;
        state.memberships = action.payload;
      })
      .addCase(addMembership.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //UPLOAD MEMBERSHIP
      .addCase(uploadMembership.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadMembership.fulfilled, (state, action) => {
        state.loading = false;
        state.memberships = action.payload;
      })
      .addCase(uploadMembership.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // GET MEMBERSHIP BY USER ID
      .addCase(getMembershipByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMembershipByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.memberships = action.payload;
      })
      .addCase(getMembershipByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // SEARCH MEMBERSHIP
      .addCase(searchMembership.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMembership.fulfilled, (state, action) => {
        state.loading = false;
        state.memberships = action.payload;
      })
      .addCase(searchMembership.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default membershipSlice.reducer;
