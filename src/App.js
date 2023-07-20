import "./App.css";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import Preloader from "./components/preloader/Preloader";

function App() {
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    { field: "symbol" },
    { field: "firstId" },
    // { field: "lastId" },
    // { field: "quoteVolume" },
    { field: "volume" },
    { field: "count" },
    { field: "askPrice" },
    // { field: "bidPrice" },
    // { field: "highPrice" },
    // { field: "lastPrice" },
    // { field: "lowPrice" },
    // { field: "openPrice" },
    // { field: "prevClosePrice" },
    // { field: "priceChange" },
    // { field: "weightedAvgPrice" },
    // { field: "priceChangePercent" },
    { field: "askQty" },
    // { field: "bidQty" },
    // { field: "lastQty" },
    // { field: "closeTime" },
    { field: "openTime" },
  ]);
  useEffect(() => {
    fetch("https://data.binance.com/api/v3/ticker/24hr")
      .then((data) => data.json())
      .then((rowData) => setRowData(rowData));
  }, []);
  console.log(rowData);
  return (
    <div className="table-container">
      <Preloader />
      <div className="ag-theme-alpine-dark" style={{ height: "80vh" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          paginationAutoPageSize={true}
          pagination={true}
        />
      </div>
    </div>
  );
}

export default App;
