import { useLocation } from "react-router-dom";
import "./noteheader.css";
const NoteHeader = () => {
  const location = useLocation();
  let pathName = location.pathname.split("/")[1];

  return (
    <div className="noteheader">
      <div className="noteheader__profile">{pathName[0].toUpperCase()}</div>
      <div className="noteheader__name"> {pathName}</div>
    </div>
  );
};

export default NoteHeader;
