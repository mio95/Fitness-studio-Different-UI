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
