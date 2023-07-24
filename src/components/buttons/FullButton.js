import { BiSolidRightArrow } from "react-icons/bi";
import "./fullButton.css";
import { FullTable } from "../utils/constants";
import { dateFormatter } from "../utils/utils";
import { TableFull } from "../utils/constants";

const FullButton = (props) => {
  const fullButton = () => {
    if (props.tableState === FullTable) {
      props.tableStateHandler("Short Table");
      props.columnDefsHandler(TableFull);
    } else {
      props.tableStateHandler(FullTable);
      props.columnDefsHandler([
        { field: "symbol" },
        { field: "firstId" },
        {
          field: "volume",
          valueFormatter: (params) => Number(params.data.volume).toFixed(2),
        },
        { field: "count", sortable: "true", unSortIcon: "true" },
        {
          field: "askPrice",
          valueFormatter: (params) => Number(params.data.askPrice).toFixed(2),
        },
        {
          field: "askQty",
          valueFormatter: (params) => Number(params.data.askQty).toFixed(2),
        },
        {
          field: "openTime",
          valueFormatter: (params) => dateFormatter(params),
        },
      ]);
    }
  };

  return (
    <button className="table-state" onClick={fullButton}>
      {props.tableState}
      <BiSolidRightArrow
        className={
          props.tableState === FullTable ? "button-arrow" : "op-button-arrow"
        }
      />
    </button>
  );
};

export default FullButton;
