import "./dropDown.css";
import { BiSolidDownArrow } from "react-icons/bi";
import { optionHelper } from "../../utils/utils";
import { dateFormatter } from "../../utils/utils";
import { useState } from "react";

const PriceDropDown = (props) => {
  const [active, setActive] = useState();

  const activeHandler = () => {
    setActive(!active);
  };

  const optionHandler = (e) => {
    const name = String(e.target.innerText);
    const optionName = optionHelper(name);
    props.seterHandler(optionName);
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
