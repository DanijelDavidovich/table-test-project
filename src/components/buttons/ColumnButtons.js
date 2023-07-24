import "./columnButtons.css";
import { BiSolidDownArrow } from "react-icons/bi";
import PriceDropDown from "./drop-down/PriceDropDown";
import QtyDropDown from "./drop-down/QtyDropDown";

const ColumnButtons = (props) => {
  const rowStationHandler = (str) => {
    if (str.includes("Price") || str.includes("price")) {
      const tmpTable = props.initTable;
      tmpTable[4] = {
        field: str,
        valueFormatter: (params) => Number(params.data.askPrice).toFixed(2),
      };
      props.seterHandler(tmpTable);
    }
  };
  return (
    <div
      className="column-buttons-container"
      style={{
        // visibility: "hidden",
        visibility: `${props.tableState === "Full Table" ? "" : "hidden"}`,
      }}
    >
      <div className="column-button button-id">
        ID <BiSolidDownArrow className="column-button-arrow" />
      </div>
      <QtyDropDown seterHandler={props.seterHandler} />

      <PriceDropDown seterHandler={rowStationHandler} />

      <div className="column-button button-time">
        Time <BiSolidDownArrow className="column-button-arrow" />
      </div>
    </div>
  );
};

export default ColumnButtons;
