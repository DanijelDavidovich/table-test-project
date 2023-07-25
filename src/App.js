import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import Preloader from "./components/preloader/Preloader";
import FullButton from "./components/buttons/FullButton";
import ErrorMessage from "./components/error/ErrorMessage";
import { FullTable } from "./components/utils/constants";
import { InitialTable } from "./components/utils/constants";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState();
  const [tableState, setTableState] = useState(FullTable);
  const [columnDefs, setColumnDefs] = useState(InitialTable);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((rowData) => {
        setRowData(rowData.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(true);
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
      <div className="above-table">
        <FullButton
          tableStateHandler={tableStateHandler}
          columnDefsHandler={columnDefsHandler}
          tableState={tableState}
        />
        <ErrorMessage errorState={error} />
      </div>
      <Preloader loading={loading} />
      <div className="ag-theme-alpine-dark" style={{ height: "81.5vh" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          paginationAutoPageSize={true}
          pagination={true}
          overlayLoadingTemplate={`<div></div>`}
          animateRows={true}
        />
      </div>
    </div>
  );
};

export default App;
