import TitleCard from "../TitleCard/TitleCard";
import "./Sidebar.css";
import add from "../../assets/add.svg";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../../slice/noteSlice";
import { Link } from "react-router-dom";

const SideBar = () => {
  const dispatch = useDispatch();
  const { folders } = useSelector((state) => state.note);

  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Pocket Notes</h1>
      <div className="sidebar__titlecards">
        {folders.map((item, index) => (
          <Link
            key={item.id}
            to={`/${item.title}/${item.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <TitleCard folder={item} key={index} />
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
