import { BiSolidRightArrow } from "react-icons/bi";
import "./fullButton.css";
import { FullTable } from "../utils/constants";
import { TableFull } from "../utils/constants";
import { InitialTable } from "../utils/constants";

const FullButton = (props) => {
  const fullButton = () => {
    if (props.tableState === FullTable) {
      props.tableStateHandler("Short Table");
      props.columnDefsHandler(TableFull);
    } else {
      props.tableStateHandler(FullTable);
      props.columnDefsHandler(InitialTable);
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
