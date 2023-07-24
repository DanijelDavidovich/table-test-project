import "./dropDown.css";
import { BiSolidDownArrow } from "react-icons/bi";
import { useState } from "react";
import { dateFormatter } from "../../utils/utils";
import { optionHelper } from "../../utils/utils";
import { colSelActions } from "../store/table-slice";
import { useDispatch } from "react-redux";

const PriceDropDown = (props) => {
  const [active, setActive] = useState();
  const dispatch = useDispatch();
  const activeHandler = () => {
    setActive(!active);
  };

  const optionHandler = (e) => {
    const name = String(e.target.innerText);
    const optionName = optionHelper(name);
    console.log(optionName);
    dispatch(colSelActions.changeColumn(optionName));

    props.seterHandler([
      { field: "symbol" },
      { field: "firstId" },
      {
        field: "volume",
        valueFormatter: (params) => Number(params.data.volume).toFixed(2),
      },
      { field: "count" },
      {
        field: `${optionName}`,
        // field: "askPrice",
        valueFormatter: (params) => Number(params.data.askPrice).toFixed(2),
      },
      {
        field: "askQty",
        valueFormatter: (params) => Number(params.data.askQty).toFixed(2),
      },
      {
        field: "openTime",
        valueFormatter: (params) => {
          dateFormatter(params);
        },
      },
    ]);
    setActive(false);
  };
  return (
    <>
      <button
        onClick={activeHandler}
        className="column-button button-price"
        style={{ color: `${active ? "white" : ""}` }}
      >
        <p className="price-text" style={{ transition: "0.3s" }}>
          Price
        </p>
        <BiSolidDownArrow
          className="column-button-arrow"
          style={{ marginLeft: `${active ? "80px" : ""}`, transition: "0.3s" }}
        />
      </button>
      <div
        className="drop-down-container"
        style={{ visibility: `${active ? "" : "hidden"}` }}
      >
        <button className="price-option" onClick={optionHandler}>
          Ask Price
        </button>
        <button className="price-option" onClick={optionHandler}>
          Bid Price
        </button>
        <button className="price-option" onClick={optionHandler}>
          High Price
        </button>
        <button className="price-option" onClick={optionHandler}>
          Last Price
        </button>
        <button className="price-option" onClick={optionHandler}>
          Low Price
        </button>
        <button className="price-option" onClick={optionHandler}>
          Open Price
        </button>
        <button className="price-option" onClick={optionHandler}>
          Prev Close Price
        </button>
        <button className="price-option" onClick={optionHandler}>
          Price Change
        </button>
        <button className="price-option" onClick={optionHandler}>
          Weighted Avg Price
        </button>
        <button className="price-option" onClick={optionHandler}>
          Price Change Percent
        </button>
      </div>
    </>
  );
};

export default PriceDropDown;
