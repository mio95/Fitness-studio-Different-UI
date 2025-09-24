import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

export const loginUser = createAsyncThunk(
  "/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await authService.login(username, password);

      // Sačuvaj u localStorage
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

export const logoutUser = createAsyncThunk("logout", async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return true;
});
