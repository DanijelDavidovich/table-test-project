import "./App.css";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import Preloader from "./components/preloader/Preloader";
import FullButton from "./components/buttons/FullButton";
import ColumnButtons from "./components/buttons/ColumnButtons";
import SelectionButton from "./components/buttons/SelectionButton";

function App() {
  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState();
  const [tableState, setTableState] = useState("Full Table");

  const [columnDefs, setColumnDefs] = useState([
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
  useEffect(() => {
    fetch("https://data.binance.com/api/v3/ticker/24hr")
      .then((data) => data.json())
      .then((rowData) => {
        setRowData(rowData);
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
    setColumnDefs(arr);
  };

  return (
    <div className="table-container">
      <SelectionButton />
      <Preloader loading={loading} />
      <ColumnButtons tableState={tableState} seterHandler={columnDefsHandler} />
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
}

export default App;
