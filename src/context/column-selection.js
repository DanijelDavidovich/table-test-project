import { createContext } from "react";
import { InitialTable } from "../components/utils/constants";

const AuthContext = createContext({
  initialTable: InitialTable,
  tableSelection: (str) => {
    // for (var i = 0; i < InitialTable.lenght; i++) console.log(initialTable[i]);
    console.log(str);
    if (str == "bidPrice") {
      console.log(str);
    }
  },
});

export default AuthContext;
