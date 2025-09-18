import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./createfolder.css";
import { useDispatch, useSelector } from "react-redux";
import { handleCreateNoteFolder } from "../../slice/noteSlice";
import { handleModal } from "../../slice/noteSlice";
import { toast } from "react-toastify";
const CreateFolder = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();
  const { folders } = useSelector((state) => state.note);

  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];
  const handleCreateFolder = () => {
    if (!title.trim().length || title.trim().length < 2) {
      toast.error("Please enter group name");
      return;
    }
    if (!color.length) {
      toast.error("Please select color");
      return;
    }
    if (folders.find((item) => item.title === title)) {
      toast.error("Group name already exists");
      return;
    }
    dispatch(
      handleCreateNoteFolder({
        id: uuidv4().slice(0, 10),
        title,
        color,
        notes: [],
      })
    );
    dispatch(handleModal(false));
  };

  return (
    <div className="createfolder">
      <h1 className="createfolder__title">Create New group</h1>
      <div className="groupname">
        <label htmlFor="groupname">Group Name</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          id="groupname"
          placeholder="Enter group name"
        />
      </div>
      <div className="choosecolor">
        <label htmlFor="color">Choose Color</label>
        <div className="colors">
          {colors.map((color) => (
            <div
              key={color}
              className="color__palette"
              style={{ backgroundColor: color }}
              onClick={() => setColor(color)}
            ></div>
          ))}
        </div>
      </div>
      <button className="create-btn" onClick={handleCreateFolder}>
        Create
      </button>
    </div>
  );
};

export default CreateFolder;
