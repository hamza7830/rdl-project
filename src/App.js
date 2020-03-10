import React from "react";
import HomePage from "../src/componenets/HomePage";

import { Provider } from "react-redux";
import store from "./Store.js";
// import FilterRequests from "./FrontEnd/MaintenanceRequests";

function App() {
  return (
    <Provider store={store}>
      <div>
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
