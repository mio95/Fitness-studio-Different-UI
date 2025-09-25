import { createSlice } from "@reduxjs/toolkit";
import {
  addNewUser,
  getAllUsers,
  getAllUsersByRole,
  updateUserPassword,
  updateUserProfile,
} from "./userThunks";

const initialState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // UPDATE USER PROFILE
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // UPDATE USER PROFILE
      .addCase(updateUserPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUserPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ADD NEW USER
      .addCase(addNewUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(addNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //GET ALL USERS
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //GET ALL USERS BY ROLE
      .addCase(getAllUsersByRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllUsersByRole.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUsersByRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
