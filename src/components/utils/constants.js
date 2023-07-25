import { dateFormatter } from "./utils";

export const FullTable = "Full Table";
export const InitialTable = [
  { field: "symbol" },
  { headerName: "First ID", field: "firstId" },
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
    headerName: "Ask Quantity",
    field: "askQty",
    valueFormatter: (params) => Number(params.data.askQty).toFixed(2),
  },
  {
    field: "openTime",
    valueFormatter: (params) => dateFormatter(params),
  },
];
export const TableFull = [
  { field: "symbol" },
  { headerName: "First ID", field: "firstId" },
  { headerName: "Last ID", field: "lastId" },
  {
    field: "quoteVolume",
    valueFormatter: (params) => Number(params.data.quoteVolume).toFixed(2),
  },
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
    field: "bidPrice",
    valueFormatter: (params) => Number(params.data.bidPrice).toFixed(2),
  },
  {
    field: "highPrice",
    valueFormatter: (params) => Number(params.data.highPrice).toFixed(2),
  },
  {
    field: "lastPrice",
    valueFormatter: (params) => Number(params.data.lastPrice).toFixed(2),
  },
  {
    field: "lowPrice",
    valueFormatter: (params) => Number(params.data.lowPrice).toFixed(2),
  },
  {
    field: "openPrice",
    valueFormatter: (params) => Number(params.data.openPrice).toFixed(2),
  },
  {
    field: "prevClosePrice",
    valueFormatter: (params) => Number(params.data.prevClosePrice).toFixed(2),
  },
  {
    field: "priceChange",
    valueFormatter: (params) => Number(params.data.priceChange).toFixed(2),
  },
  {
    headerName: "Weighted Average Price",
    field: "weightedAvgPrice",
    valueFormatter: (params) => Number(params.data.weightedAvgPrice).toFixed(2),
  },
  {
    field: "priceChangePercent",
    valueFormatter: (params) =>
      Number(params.data.priceChangePercent).toFixed(2),
  },
  {
    headerName: "Ask Quantity",
    field: "askQty",
    valueFormatter: (params) => Number(params.data.askQty).toFixed(2),
  },
  {
    headerName: "Bid Quantity",
    field: "bidQty",
    valueFormatter: (params) => Number(params.data.bidQty).toFixed(2),
  },
  {
    headerName: "Last Quantity",
    field: "lastQty",
    valueFormatter: (params) => Number(params.data.lastQty).toFixed(2),
  },
  {
    field: "closeTime",
    valueFormatter: (params) => dateFormatter(params),
  },
  {
    field: "openTime",
    valueFormatter: (params) => dateFormatter(params),
  },
];
