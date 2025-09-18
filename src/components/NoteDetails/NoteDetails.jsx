import "./notedetails.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const NoteDetails = () => {
  const { folders } = useSelector((state) => state.note);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const currentFolder = folders.find((item) => item.id === id);

  return (
    <div className="notedetails">
      {currentFolder.notes.map((note) => (
        <div className="notedetail__card" key={note.id}>
          <p className="note">{note.note}</p>
          <p className="time">
            {note?.date?.split("and")[0]} <span className="dot"></span>{" "}
            {note?.date?.split("and")[1]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NoteDetails;
