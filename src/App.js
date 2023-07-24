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
import store from "./components/buttons/store/table-store";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import { colSelActions } from "./components/buttons/store/table-slice";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState();
  const [tableState, setTableState] = useState(FullTable);
  const dispatch = useDispatch();

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
      valueFormatter: (params) => dateFormatter(params),
    },
  ]);

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
    dispatch(colSelActions.setInitialState(columnDefs));
  }, []);
  const tableStateHandler = (str) => {
    setTableState(str);
  };
  const columnDefsHandler = (arr) => {
    setColumnDefs(arr);
  };

  return (
    <Provider store={store}>
      <div className="table-container">
        <SelectionButton />
        <Preloader loading={loading} />
        <ColumnButtons
          tableState={tableState}
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
    </Provider>
  );
};

export default App;
