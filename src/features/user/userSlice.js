import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";
import { toast } from "react-toastify";

// Async thunk za update korisnika
export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.put(`/users/${userData.id}`, userData);
      toast.success("Profil je uspešno ažuriran!");
      return response.data; // vraća nove podatke korisnika
    } catch (error) {
      toast.error("Greška prilikom ažuriranja profila!");
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const storedUser = localStorage.getItem("user");

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: storedUser ? JSON.parse(storedUser) : null,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
