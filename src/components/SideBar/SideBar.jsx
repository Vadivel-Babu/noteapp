import TitleCard from "../TitleCard/TitleCard";
import "./Sidebar.css";
import add from "../../assets/add.svg";
import { useDispatch } from "react-redux";
import { handleModal } from "../../slice/noteSlice";
import { Link } from "react-router-dom";

const SideBar = () => {
  const dispatch = useDispatch();
  const arr = ["Work", "Personal", "ToDo", "Ideas", "Random"];
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Pocket Notes</h1>
      <div className="sidebar__titlecards">
        {arr.map((item, index) => (
          <Link
            key={index}
            to={`/${item}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <TitleCard name={item} key={index} />
          </Link>
        ))}
      </div>
      <button
        className="sidebar__addfolder"
        onClick={() => dispatch(handleModal(true))}
      >
        <img src={add} alt="add" className="btn-img" />
      </button>
    </div>
  );
};

export default SideBar;
