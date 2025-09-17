import { useState } from "react";
import "./noteinbox.css";
import activebtn from "../../assets/activebtn.svg";
import disablebtn from "../../assets/disabledbtn.svg";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { handleAddNote } from "../../slice/noteSlice";
import { useLocation } from "react-router-dom";
const NoteInbox = () => {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  let folderId = location.pathname.split("/")[2];

  const handleAddNoteToFolder = () => {
    const newNote = {
      id: uuidv4().slice(0, 10),
      note,
    };
    dispatch(handleAddNote({ newNote, folderId }));
    setNote("");
  };
  return (
    <div className="noteinbox">
      <div className="noteinbox__container">
        <textarea
          name=""
          id=""
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your text here..........."
        />
        <button
          disabled={!note.length}
          onClick={handleAddNoteToFolder}
          className="send__btn"
        >
          <img src={note.length ? activebtn : disablebtn} alt="btn" />
        </button>
      </div>
    </div>
  );
};

export default NoteInbox;
