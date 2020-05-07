import React from "react";
import CreateNewReports from "./componenets/create_reports/CreateNewReports";
import HomePage from "./componenets/home_page/HomePage.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Route from "react-router-dom/Route";
import { Provider } from "react-redux";
import store from "./Store.js";

function App() {
  return (
    <Provider store={store}>
      {/* <div>
        <HomePage />
      </div> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/newreports" component={CreateNewReports} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
