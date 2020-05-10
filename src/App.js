import React from "react";
import store from "./Store.js";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import HomePage from "./componenets/home_page/HomePage.js";
import GenerateReport from "./componenets/generate_report/GenerateReport";
import CreateNewReports from "./componenets/create_reports/CreateNewReports";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route path="/" component={GenerateReport} />
          {/* <Route exact path="/newreports" component={CreateNewReports} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
