import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice/userSlice";
import dataReducer from "./features/dataSlice/dataSlice";

export const store = configureStore({
  reducer: {
    userState: userReducer,
    dataState: dataReducer,
  },
});
