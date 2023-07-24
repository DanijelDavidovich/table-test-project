import { createSlice } from "@reduxjs/toolkit";
import { InitialTable } from "../../utils/constants";

const columnSelections = createSlice({
  name: "selection",
  initialState: [1],
  reducers: {
    setInitialState(state, action) {
      state.selection = action.initArray;
    },
    changeColumn(state, action) {
      console.log(state, action);
    },
  },
});

export const colSelActions = columnSelections.actions;

export default columnSelections;
