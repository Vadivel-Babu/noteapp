import "./notedetails.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const NoteDetails = () => {
  const { folders } = useSelector((state) => state.note);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const currentFolder = folders.find((item) => item.id === id);
  console.log(currentFolder);

  return (
    <div className="notedetails">
      <div className="notedetail__card">
        <p className="note">
          lore*200m ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod, quia, voluptatum, voluptate quibusdam voluptates quibusdam
          voluptatibus quae quas quidem. Quisquam, quod, quia, voluptatum,
        </p>
        <p className="time">
          9 Mar 2023 <span className="dot"></span> 10:10 AM
        </p>
      </div>
    </div>
  );
};

export default NoteDetails;
