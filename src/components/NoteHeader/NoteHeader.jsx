import { useLocation } from "react-router-dom";
import "./noteheader.css";
import backBtn from "../../assets/back.svg";
const NoteHeader = () => {
  const location = useLocation();
  let pathName = location.pathname.split("/")[1];

  return (
    <div className="noteheader">
      <button className="btn back-btn" onClick={() => window.history.back()}>
        <img src={backBtn} alt="back" />
      </button>
      <div className="noteheader__profile">{pathName[0].toUpperCase()}</div>
      <div className="noteheader__name"> {pathName}</div>
    </div>
  );
};

export default NoteHeader;
