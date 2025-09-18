import { useLocation, useNavigate } from "react-router-dom";
import "./noteheader.css";
import backBtn from "../../assets/back.svg";
import { useSelector } from "react-redux";
const NoteHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let pathName = location.pathname.split("/");
  const { folders } = useSelector((state) => state.note);
  const currentFolder = folders.find((item) => item.id === pathName[2]);
  const folderName = currentFolder?.title.split(" ");

  return (
    <div className="noteheader">
      <button className="btn back-btn" onClick={() => navigate("/")}>
        <img src={backBtn} alt="back" />
      </button>
      <div
        className="noteheader__profile"
        style={{ backgroundColor: currentFolder?.color }}
      >
        {" "}
        {folderName[0][0].toUpperCase()}{" "}
        {folderName[1] ? folderName[1][0]?.toUpperCase() : ""}
      </div>
      <div className="noteheader__name"> {currentFolder?.title}</div>
    </div>
  );
};

export default NoteHeader;
