import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import api from "../../api/axios";
import { toast } from "react-toastify";

// LOGIN
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await authService.login(username, password);

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

// LOGOUT
export const logoutUser = createAsyncThunk("auth/logout", async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return true;
});

// UPDATE USER PROFILE
export const updateUserProfile = createAsyncThunk(
  "auth/updateProfile",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.put(`/users/${userData.id}`, userData);
      toast.success("Profil je uspešno ažuriran!");
      return response.data;
    } catch (error) {
      toast.error("Greška prilikom ažuriranja profila!");
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
