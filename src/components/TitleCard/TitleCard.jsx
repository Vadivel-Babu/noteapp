import "./titlecard.css";
import { useLocation } from "react-router-dom";
const TitleCard = ({ name }) => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  return (
    <div className={`titlecard ${pathname === name ? "active" : ""}`}>
      <div className="titlecard__profile">{name[0].toUpperCase()}</div>
      <div className="titlecard__name"> {name}</div>
    </div>
  );
};

export default TitleCard;
