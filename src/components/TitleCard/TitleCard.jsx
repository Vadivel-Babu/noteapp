import "./titlecard.css";
import { useLocation } from "react-router-dom";
const TitleCard = ({ folder }) => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[2];
  const folderName = folder.title.split(" ");
  console.log(folderName, folderName[0], folderName[1]);

  return (
    <div className={`titlecard ${pathname === folder.id ? "active" : ""}`}>
      <div
        className="titlecard__profile"
        style={{ backgroundColor: folder.color }}
      >
        {folderName[0][0].toUpperCase()}{" "}
        {folderName[1] ? folderName[1][0]?.toUpperCase() : ""}
      </div>
      <div className="titlecard__name"> {folder.title}</div>
    </div>
  );
};

export default TitleCard;
