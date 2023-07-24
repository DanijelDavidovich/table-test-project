import "./columnButtons.css";
import { BiSolidDownArrow } from "react-icons/bi";
import PriceDropDown from "./drop-down/PriceDropDown";
import QtyDropDown from "./drop-down/QtyDropDown";
import { useState } from "react";
import { InitialTable } from "../utils/constants";

const ColumnButtons = (props) => {
  const [initTable, setInitTable] = useState(InitialTable);
  const rowStationHandler = (str) => {
    for (var i = 0; i < 7; i++) {
      if (str.includes("Price") || str.includes("price")) {
        const index = initTable.findIndex((el) => el.id === "price");
        console.log(index);
        const tmpTable = initTable;
        tmpTable[index] = {
          id: "price",
          field: str,
          valueFormatter: (params) => Number(params.data.askPrice).toFixed(2),
        };
        setInitTable(tmpTable);
        
        props.seterHandler(initTable);
      }
    }
  };
  console.log(initTable);
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
