import "./dropDown.css";
import { BiSolidDownArrow } from "react-icons/bi";
import { useState } from "react";

const QtyDropDown = (props) => {
  const [active, setActive] = useState(false);
  const activeHandler = () => {
    setActive(!active);
  };

  const optionHelper = (name) => {
    switch (name) {
      case "Ask Quantity":
        return "askQty";
        break;
      case "Bid Quantity":
        return "bidQty";
        break;
      case "Last Quantity":
        return "lastQty";
        break;
      default:
        return;
    }
  };
  const optionHandler = (e) => {
    const name = String(e.target.innerText);
    console.log(name);
    const optionName = optionHelper(name);
    console.log(optionName);

    props.seterHandler([
      { field: "symbol" },
      { field: "firstId" },
      {
        field: "volume",
        valueFormatter: (params) => Number(params.data.volume).toFixed(2),
      },
      { field: "count" },
      {
        field: "askPrice",
        valueFormatter: (params) => Number(params.data.askPrice).toFixed(2),
      },
      {
        field: `${optionName}`,
        valueFormatter: (params) => Number(params.data.askQty).toFixed(2),
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
    console.log("qty active");
    setActive(false);
  };
  return (
    <>
      <button
        onClick={activeHandler}
        className="column-button button-qty"
        style={{ color: `${active ? "white" : ""}` }}
      >
        <p className="qty-text" style={{ transition: "0.3s" }}>
          Quantity
        </p>
        <BiSolidDownArrow
          className="column-button-arrow"
          style={{
            marginLeft: `${active ? "80px" : "55px"}`,
            transition: "0.3s",
          }}
        />
      </button>
      <div
        className="drop-down-container-qty"
        style={{ visibility: `${active ? "" : "hidden"}` }}
      >
        <button className="price-option" onClick={optionHandler}>
          Ask Quantity
        </button>
        <button className="price-option" onClick={optionHandler}>
          Bid Quantity
        </button>
        <button className="price-option" onClick={optionHandler}>
          Last Quantity
        </button>
      </div>
    </>
  );
};

export default QtyDropDown;
