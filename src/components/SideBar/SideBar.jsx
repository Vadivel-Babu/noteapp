import TitleCard from "../TitleCard/TitleCard";
import "./Sidebar.css";
import add from "../../assets/add.svg";
import { useDispatch } from "react-redux";
import { handleModal } from "../../slice/noteSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const arr = ["Work", "Personal", "ToDo", "Ideas"];
  return (
    <div className="sidebar">
      <h1 className="sidebar__title">Pocket Notes</h1>
      <div className="sidebar__titlecards">
        {arr.map((item, index) => (
          <TitleCard name={item} key={index} />
        ))}
      </div>
      <button
        className="sidebar__addfolder"
        onClick={() => dispatch(handleModal(true))}
      >
        <img src={add} alt="add" />
      </button>
    </div>
  );
};

export default SideBar;
