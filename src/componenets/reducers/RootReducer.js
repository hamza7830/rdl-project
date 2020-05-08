import { combineReducers } from "redux";

import generateQueryReducer from "./generateQueryReducer.js";
import reportsReducer from "./reportsReducer";
import registerReducer from "./registerReducer.js";

const RootReducer = combineReducers({
  generateQueryReducer,
  registerReducer,
  reportsReducer,
});

export default RootReducer;
