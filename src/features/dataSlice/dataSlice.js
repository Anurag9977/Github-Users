import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mockRepos from "../../utils/mockData/mockRepos";
import mockFollowers from "../../utils/mockData/mockFollowers";
import { customFetch } from "../../utils/axiosCustomInstance";
import { toggleError } from "../userSlice/userSlice";

const defaultState = {
  repos: mockRepos,
  followers: mockFollowers,
  rateLimit: 0,
};

export const getRateLimit = createAsyncThunk(
  "user/rateLimit",
  async (_, thunkAPI) => {
    try {
      const response = await customFetch.get("/rate_limit");
      const { remaining } = response.data.rate;
      if (remaining === 0) {
        thunkAPI.dispatch(
          toggleError({
            show: true,
            message:
              "Your rate limit for the API has expired. Please try again in an hour!",
          })
        );
      }
      return remaining;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getFollowers = createAsyncThunk(
  "user/followers",
  async (data, thunkAPI) => {
    try {
      const response = await customFetch.get(
        `/users/${data.username}/followers?per_page=100`
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getRepos = createAsyncThunk(
  "user/repos",
  async (data, thunkAPI) => {
    try {
      const response = await customFetch.get(
        `/users/${data.username}/repos?per_page=100`
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: defaultState,
  extraReducers: (builder) => {
    builder
      .addCase(getFollowers.fulfilled, (state, action) => {
        state.followers = action.payload;
      })
      .addCase(getFollowers.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(getRepos.fulfilled, (state, action) => {
        state.repos = action.payload;
      })
      .addCase(getRepos.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(getRateLimit.fulfilled, (state, action) => {
        state.rateLimit = action.payload;
      })
      .addCase(getRateLimit.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export default dataSlice.reducer;
