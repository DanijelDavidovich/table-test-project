import "./App.css";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import Preloader from "./components/preloader/Preloader";
import ColumnButtons from "./components/buttons/ColumnButtons";
import SelectionButton from "./components/buttons/SelectionButton";
import FullButton from "./components/buttons/FullButton";
import { FullTable } from "./components/utils/constants";
import { dateFormatter } from "./components/utils/utils";
import axios from "axios";
import AuthContext from "./context/column-selection";
import { InitialTable } from "./components/utils/constants";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState();
  const [tableState, setTableState] = useState(FullTable);

  const [columnDefs, setColumnDefs] = useState(InitialTable);

  useEffect(() => {
    axios
      .get("https://data.binance.com/api/v3/ticker/24hr")
      .then((rowData) => {
        setRowData(rowData.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Somethng went wrong...");
      });
  }, []);
  const tableStateHandler = (str) => {
    setTableState(str);
  };
  const columnDefsHandler = (arr) => {
    console.log(arr);
    console.log(columnDefs);
    setColumnDefs((prevState) => arr);
  };
  console.log("Refresh");

  return (
    <div className="table-container">
      <SelectionButton />
      <Preloader loading={loading} />
      <ColumnButtons
        tableState={tableState}
        initTable={columnDefs}
        seterHandler={columnDefsHandler}
      />
      <div className="ag-theme-alpine-dark" style={{ height: "76vh" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          paginationAutoPageSize={true}
          pagination={true}
          overlayLoadingTemplate={`<div></div>`}
          animateRows={true}
        />
      </div>
      <FullButton
        tableStateHandler={tableStateHandler}
        columnDefsHandler={columnDefsHandler}
        tableState={tableState}
      />
    </div>
  );
};

export default App;
