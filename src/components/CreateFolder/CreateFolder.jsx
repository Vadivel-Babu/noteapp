import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./createfolder.css";
const CreateFolder = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

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
      <button
        className="create-btn"
        onClick={() => {
          console.log({ id: uuidv4().slice(0, 10), title, color });
        }}
      >
        Create
      </button>
    </div>
  );
};

export default CreateFolder;
