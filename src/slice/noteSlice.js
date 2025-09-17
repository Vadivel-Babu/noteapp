import { createSlice } from "@reduxjs/toolkit";

//getting note from localstorage
const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("noteFolders")) || [];
};

const initialState = {
  isModal: false,
  folders: getDataFromLocalStorage(),
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    // modal handler
    handleModal: (state, action) => {
      state.isModal = action.payload;
    },
    //create note folder handler
    handleCreateNoteFolder: (state, action) => {
      console.log(action.payload);

      state.folders = [...state.folders, action.payload];
      localStorage.setItem(
        "noteFolders",
        JSON.stringify(state.folders.map((todo) => todo))
      );
    },

    handleAddNote: (state, action) => {
      const { folderId, note } = action.payload;
      const folder = state.folders.find((folder) => folder.id === folderId);
    },
  },
});

export const { handleModal, handleCreateNoteFolder } = noteSlice.actions;
export default noteSlice.reducer;
