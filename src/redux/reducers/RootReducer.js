import { combineReducers } from "redux";

import generateQueryReducer from "./generateQueryReducer.js";
import reportsReducer from "./reportsReducer";
import registerReducer from "./registerReducer.js";
import generateReportReducer from "./generateReportReducer.js";

const RootReducer = combineReducers({
  generateQueryReducer,
  registerReducer,
  reportsReducer,
  generateReportReducer,
});

export default RootReducer;
