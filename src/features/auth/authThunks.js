import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
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
      toast.error(error.response.data.message);
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
