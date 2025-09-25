import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";
import { toast } from "react-toastify";

//get types of training
export const getTrainingTypes = createAsyncThunk(
  "training/getTrainingTypes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/training-types");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
