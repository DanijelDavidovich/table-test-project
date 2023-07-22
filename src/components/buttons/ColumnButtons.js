import "./columnButtons.css";
import { BiSolidDownArrow } from "react-icons/bi";

const ColumnButtons = (props) => {
  return (
    <div
      className="column-buttons-container"
      style={{
        visibility: `${props.tableState === "Full Table" ? "" : "hidden"}`,
      }}
    >
      <div className="column-button button-id">
        ID <BiSolidDownArrow className="column-button-arrow" />
      </div>
      <div className="column-button button-qty">
        Quontity <BiSolidDownArrow className="column-button-arrow" />
      </div>
      <div className="column-button button-price">
        Price <BiSolidDownArrow className="column-button-arrow" />
      </div>
      <div className="column-button button-time">
        Time <BiSolidDownArrow className="column-button-arrow" />
      </div>
    </div>
  );
};

export default ColumnButtons;
