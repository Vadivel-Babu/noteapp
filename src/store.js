import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./slice/noteSlice";

export const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});
