import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import ColumnsReducer from "../src/componenets/reducers/ColumnsReducer";

const middlewares = [thunk, logger];
const appliedMiddlewares = applyMiddleware(...middlewares);
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(ColumnsReducer, composeEnhancers(appliedMiddlewares));

export default store;
