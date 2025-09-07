import Modal from "./components/Modal/Modal";
import SideBar from "./components/Sidebar/Sidebar";
import "./app.css";
import { useSelector } from "react-redux";
import NoteHeader from "./components/NoteHeader/NoteHeader";
import NoteDetails from "./components/NoteDetails/NoteDetails";
import NoteInbox from "./components/NoteInbox/NoteInbox";

function App() {
  const isModal = useSelector((state) => state.note.isModal);

  return (
    <div className="app">
      <SideBar />
      {isModal && <Modal />}
      <div className="app__noteSection">
        <NoteHeader />
        <NoteDetails />
        <NoteInbox />
      </div>
    </div>
  );
}

export default App;
