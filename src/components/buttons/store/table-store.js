import { configureStore } from "@reduxjs/toolkit";
import columnSelections from "./table-slice";

const store = configureStore({
  reducer: columnSelections.reducer,
});

export default store;
