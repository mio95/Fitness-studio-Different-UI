import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";
import { toast } from "react-toastify";

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
      toast.error(error.response.data.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// UPDATE USER PASSWORD
export const updateUserPassword = createAsyncThunk(
  "auth/updatePassword",
  async ({ userId, changePassword }, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `/users/change-password/${userId}`,
        changePassword
      );
      toast.success("Password je uspešno ažuriran!");
      return response.data;
    } catch (error) {
      toast.error(
        "Greška prilikom ažuriranja password-a! Greška sa API-a: " +
          error.response.data.message
      );
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ADD NEW USER
export const addNewUser = createAsyncThunk(
  "auth/addNewUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post("/users", userData);
      toast.success("Uspesno ste dodali novog korisnika!");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// GET ALL USERS
export const getAllUsers = createAsyncThunk(
  "auth/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/users");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// GET ALL USERS BY ROLE
export const getAllUsersByRole = createAsyncThunk(
  "auth/getAllUsersByRole",
  async (role, { rejectWithValue }) => {
    try {
      const response = await api.get(`/users/${role}`);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
