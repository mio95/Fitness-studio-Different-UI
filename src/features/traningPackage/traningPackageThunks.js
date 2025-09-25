import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";
import { toast } from "react-toastify";

//add new training packet
export const addNewTrainingPacket = createAsyncThunk(
  "training/addNewTrainingPacket",
  async ({ trainingType, numOfTrainings }, { rejectWithValue }) => {
    try {
      const response = await api.post("/training-packages", {
        trainingType, // backend očekuje objekat trainingType
        numOfTrainings, // pošalješ broj treninga
      });
      toast.success("Uspesno ste dodali novi paket treninga!");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

//get all training packages
export const getAllTrainingPackages = createAsyncThunk(
  "training/getAllTrainingPackages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/training-packages");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// delete training packet
export const deleteTrainingPacket = createAsyncThunk(
  "training/deleteTrainingPacket",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/training-packages/${id}`);
      toast.success("Uspesno ste obrisali paket treninga!");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
