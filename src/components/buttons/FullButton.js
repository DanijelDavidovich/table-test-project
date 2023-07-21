import { BiSolidRightArrow } from "react-icons/bi";
import "./fullButton.css";

const FullButton = (props) => {
  const fullButton = () => {
    if (props.tableState === "Full Table") {
      props.tableStateHandler("Short Table");
      props.columnDefsHandler([
        { field: "symbol" },
        { field: "firstId" },
        { field: "lastId" },
        { field: "quoteVolume" },
        {
          field: "volume",
        },
        { field: "count" },
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
            const time = Number(params.data.openTime);
            const t = new Date(time);
            const day = t.getDay();
            const month = t.getMonth();
            const year = t.getFullYear();
            console.log(`${day}/${month}/${year}`);
            return `${day > 9 ? day : `0${day}`}/${
              month > 9 ? month : `0${month}`
            }/${year}`;
          },
        },
        {
          field: "openTime",
          valueFormatter: (params) => {
            const time = Number(params.data.openTime);
            const t = new Date(time);
            const day = t.getDay();
            const month = t.getMonth();
            const year = t.getFullYear();
            console.log(`${day}/${month}/${year}`);
            return `${day > 9 ? day : `0${day}`}/${
              month > 9 ? month : `0${month}`
            }/${year}`;
          },
        },
      ]);
    } else {
      props.tableStateHandler("Full Table");
      props.columnDefsHandler([
        { field: "symbol" },
        { field: "firstId" },
        { field: "volume" },
        { field: "count" },
        { field: "askPrice" },
        { field: "askQty" },
        {
          field: "openTime",
          valueFormatter: (params) => {
            const time = Number(params.data.openTime);
            const t = new Date(time);
            const day = t.getDay();
            const month = t.getMonth();
            const year = t.getFullYear();
            console.log(`${day}/${month}/${year}`);
            return `${day > 9 ? day : `0${day}`}/${
              month > 9 ? month : `0${month}`
            }/${year}`;
          },
        },
      ]);
    }
  };
  return (
    <button className="table-state" onClick={fullButton}>
      {props.tableState}
      <BiSolidRightArrow
        className={
          props.tableState === "Full Table" ? "button-arrow" : "op-button-arrow"
        }
      />
    </button>
  );
};

export default FullButton;
