import { useState } from "react";
import "./noteinbox.css";
import activebtn from "../../assets/activebtn.svg";
import disablebtn from "../../assets/disabledbtn.svg";
const NoteInbox = () => {
  const [note, setNote] = useState("");

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
          onClick={() => {
            console.log(note);
          }}
          className="send__btn"
        >
          <img src={note.length ? activebtn : disablebtn} alt="btn" />
        </button>
      </div>
    </div>
  );
};

export default NoteInbox;
