import "./selectionButton.css";
import { BiSolidDownArrow } from "react-icons/bi";
import { useState } from "react";

const SelectionButton = () => {
  const [selectionActive, setSelectionActive] = useState(false);
  const selectionHandler = () => {
    setSelectionActive(!selectionActive);
  };
  return (
    <div className="selection-container">
      <button className="selection-button" onClick={selectionHandler}>
        <p>Column selection</p>
        <BiSolidDownArrow className="selection-arrow" />
      </button>
      <div
        className="selection-options"
        style={{ visibility: `${selectionActive ? "" : "hidden"}` }}
      >
        <form></form>
      </div>
    </div>
  );
};

export default SelectionButton;
