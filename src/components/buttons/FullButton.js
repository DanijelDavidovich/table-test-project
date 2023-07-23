import { BiSolidRightArrow } from "react-icons/bi";
import "./fullButton.css";
import { FullTable } from "../utils/constants";
import { dateFormatter } from "../utils/utils";

const FullButton = (props) => {
  const fullButton = () => {
    if (props.tableState === FullTable) {
      props.tableStateHandler("Short Table");
      props.columnDefsHandler([
        { field: "symbol" },
        { field: "firstId" },
        { field: "lastId" },
        { field: "quoteVolume" },
        {
          field: "volume",
        },
        { field: "count", sortable: "true", unSortIcon: "true" },
        { field: "askPrice" },
        { field: "bidPrice" },
        { field: "highPrice" },
        { field: "lastPrice" },
        { field: "lowPrice" },
        { field: "openPrice" },
        { field: "prevClosePrice" },
        { field: "priceChange" },
        { field: "weightedAvgPrice" },
        { field: "priceChangePercent" },
        { field: "askQty" },
        { field: "bidQty" },
        { field: "lastQty" },
        {
          field: "closeTime",
          valueFormatter: (params) => {
            dateFormatter(params);
            // const time = Number(params.data.openTime);
            // const t = new Date(time);
            // const day = t.getDay();
            // const month = t.getMonth();
            // const year = t.getFullYear();
            // console.log(`${day}/${month}/${year}`);
            // return `${day > 9 ? day : `0${day}`}/${
            //   month > 9 ? month : `0${month}`
            // }/${year}`;
          },
        },
        {
          field: "openTime",
          valueFormatter: (params) => {
            dateFormatter(params);
          },
        },
      ]);
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
