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
  function getFormattedDateTime() {
    const now = new Date();

    const day = now.getDate();
    const month = now.toLocaleString("en-US", { month: "short" });
    const year = now.getFullYear();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${day} ${month} ${year} and ${hours}:${minutes} ${ampm}`;
  }

  const handleAddNoteToFolder = () => {
    const newNote = {
      id: uuidv4().slice(0, 10),
      note,
      date: getFormattedDateTime(),
    };
    dispatch(handleAddNote({ newNote, folderId }));
    setNote("");
  };
  const handleKeyDown = (e) => {
    if (note.trim().length === 0 && e.key === "Enter") return;

    if (e.key === "Enter") {
      e.preventDefault();
      handleAddNoteToFolder();
    }
  };
  return (
    <div className="noteinbox">
      <div className="noteinbox__container">
        <textarea
          name=""
          id=""
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your text here..........."
          onKeyDown={handleKeyDown}
        />
        <button
          disabled={!note.length}
          onClick={handleAddNoteToFolder}
          className="send__btn"
        >
          <img src={note.trim().length ? activebtn : disablebtn} alt="btn" />
        </button>
      </div>
    </div>
  );
};

export default NoteInbox;
