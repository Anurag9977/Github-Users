import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mockUser from "../../utils/mockData/mockUser";
import { customFetch } from "../../utils/axiosCustomInstance";
import { getFollowers, getRateLimit, getRepos } from "../dataSlice/dataSlice";

const defaultState = {
  user: mockUser,
  isLoading: false,
  error: {
    show: false,
    message: "Something went wrong!",
  },
};

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data, thunkAPI) => {
    try {
      const response = await customFetch.get(`/users/${data.username}`);
      await thunkAPI.dispatch(getRepos({ username: data.username }));
      await thunkAPI.dispatch(getFollowers({ username: data.username }));
      await thunkAPI.dispatch(getRateLimit());
      return response.data;
    } catch (error) {
      await thunkAPI.dispatch(getRateLimit());
      thunkAPI.dispatch(
        toggleError({
          show: true,
          message: "The user you searched for was not found.",
        })
      );
      return thunkAPI.rejectWithValue("Error");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    toggleError: (state, action) => {
      if (action.payload) {
        const { show, message } = action.payload;
        state.error = { show, message };
      } else {
        state.error = defaultState.error;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;

export const { toggleError } = userSlice.actions;
