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
