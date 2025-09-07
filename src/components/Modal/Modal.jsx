import "./modal.css";
import CreateFolder from "../CreateFolder/CreateFolder";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { handleModal } from "../../slice/noteSlice";
const Modal = () => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      dispatch(handleModal(false));
    }
  };
  return (
    <div onClick={closeModal} ref={modalRef} className="modal">
      <CreateFolder />
    </div>
  );
};

export default Modal;
