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
      state.folders = [...state.folders, action.payload];
      localStorage.setItem(
        "noteFolders",
        JSON.stringify(state.folders.map((folder) => folder))
      );
    },

    handleAddNote: (state, action) => {
      console.log(action.payload);

      const { newNote, folderId } = action.payload;

      const getFolder = state.folders.map((folder) => {
        if (folder.id === folderId) {
          console.log(folderId, folder.id);
          console.log("matched");
          //return folder;
          return {
            ...folder,
            notes: [...folder.notes, newNote],
          };
        }
        return folder;
      });
      state.folders = getFolder;
      localStorage.setItem("noteFolders", JSON.stringify(state.folders));
    },
  },
});

export const { handleModal, handleCreateNoteFolder, handleAddNote } =
  noteSlice.actions;
export default noteSlice.reducer;
