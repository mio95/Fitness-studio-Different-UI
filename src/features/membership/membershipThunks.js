import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";
import { toast } from "react-toastify";

// ADD MEMBERSHIP
export const addMembership = createAsyncThunk(
  "membership/addMembership",
  async (membership, { rejectWithValue }) => {
    try {
      const response = await api.post("/memberships", membership);
      toast.success("Uspesno ste dodali novu cijenu!");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// UPLOAD MEMBERSHIP
export const uploadMembership = createAsyncThunk(
  "membership/uploadMembership",
  async (membership, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `/memberships/${membership.id}`,
        membership
      );
      toast.success("Uspesno ste ažurirali cijenu!");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// GET BY USER ID
export const getMembershipByUserId = createAsyncThunk(
  "membership/getMembershipByUserId",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/memberships/user/${userId}`);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

//SEARCH MEMBERSHIP BY FIRSTNAME, LASTNAME and STATUS
export const searchMembership = createAsyncThunk(
  "membership/searchMembership",
  async ({ firstName, lastName, status }, { rejectWithValue }) => {
    try {
      // const params = { firstName, lastName, status };

      const params = Object.fromEntries(
        Object.entries({ firstName, lastName, status }).filter(
          ([, value]) =>
            value !== undefined &&
            value !== null &&
            !(typeof value === "string" && value.trim() === "")
        )
      );

      const response = await api.get(`/memberships/search/?`, { params });
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      return rejectWithValue(
        error.response?.data || { massage: error.message }
      );
    }
  }
);
