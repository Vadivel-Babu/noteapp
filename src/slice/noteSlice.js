import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    // modal handler
    handleModal: (state, action) => {
      state.isModal = action.payload;
    },
  },
});

export const { handleModal } = noteSlice.actions;
export default noteSlice.reducer;
