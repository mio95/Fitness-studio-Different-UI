import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";
import { toast } from "react-toastify";

//get statistics with parmetrs startdate and enddate and users and training types on api   /coach/{coachId}/training-type/{trainingTypeId}
export const getStatistics = createAsyncThunk(
  "statistics/getStatistics",
  async (
    { startDate, endDate, userId, trainingTypeId },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.get(
        `/statistics/coach/${userId}/training-type/${trainingTypeId}`,
        {
          params: {
            startDate,
            endDate,
          },
        }
      );
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// get all training by usedID and trainingTypeId and beetween startDate and endDate
export const getAllTrainingsByUserId = createAsyncThunk(
  "statistics/getAllTrainings",
  async ({ userId, startDate, endDate, trainingType }, { rejectWithValue }) => {
    try {
      // prave se samo parametri koji nisu undefined ili null
      const params = Object.fromEntries(
        Object.entries({ startDate, endDate, trainingType }).filter(
          ([, value]) => value !== undefined && value !== null
        )
      );

      const response = await api.get(
        `/user-trainings/user/${userId}/statistics`,
        { params }
      );

      return response.data;
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
