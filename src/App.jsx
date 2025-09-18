import Modal from "./components/Modal/Modal";
import SideBar from "./components/SideBar/SideBar";
import "./app.css";
import { useSelector } from "react-redux";
import NoteHeader from "./components/NoteHeader/NoteHeader";
import NoteDetails from "./components/NoteDetails/NoteDetails";
import NoteInbox from "./components/NoteInbox/NoteInbox";
import { Route, Routes } from "react-router-dom";
import NoNote from "./components/NoNote/NoNote";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  const isModal = useSelector((state) => state.note.isModal);

  const location = useLocation();
  const pathname = location.pathname.split("/");

  return (
    <div className="app">
      {" "}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="desktop">
        <SideBar />
        {pathname[1].length ? (
          <Routes>
            <Route
              path={"/:name/:id"}
              exact
              element={
                <div className="app__noteSection">
                  <NoteHeader />
                  <NoteDetails />
                  <NoteInbox />
                </div>
              }
            />
          </Routes>
        ) : (
          <NoNote />
        )}
      </div>
      <div className="mobile">
        <Routes>
          <Route path={"/"} exact element={<SideBar />} />
          <Route
            path={"/:name/:id"}
            exact
            element={
              <div className="app__noteSection">
                <NoteHeader />
                <NoteDetails />
                <NoteInbox />
              </div>
            }
          />
        </Routes>
      </div>
      {isModal && <Modal />}
    </div>
  );
}

export default App;
