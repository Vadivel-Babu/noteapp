import Modal from "./components/Modal/Modal";
import SideBar from "./components/Sidebar/Sidebar";
import "./app.css";
import { useSelector } from "react-redux";

function App() {
  const isModal = useSelector((state) => state.note.isModal);

  return (
    <div className="app">
      <SideBar />
      {isModal && <Modal />}
    </div>
  );
}

export default App;
