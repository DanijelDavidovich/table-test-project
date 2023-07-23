import "./columnButtons.css";
import { BiSolidDownArrow } from "react-icons/bi";
import PriceDropDown from "./drop-down/PriceDropDown";
import QtyDropDown from "./drop-down/QtyDropDown";

const ColumnButtons = (props) => {
  return (
    <div
      className="column-buttons-container"
      style={{
        visibility: "hidden",
        // visibility: `${props.tableState === "Full Table" ? "" : "hidden"}`,
      }}
    >
      <div className="column-button button-id">
        ID <BiSolidDownArrow className="column-button-arrow" />
      </div>
      <QtyDropDown seterHandler={props.seterHandler} />

      <PriceDropDown seterHandler={props.seterHandler} />

      <div className="column-button button-time">
        Time <BiSolidDownArrow className="column-button-arrow" />
      </div>
    </div>
  );
};

export default ColumnButtons;
