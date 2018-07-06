import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTE_PATHS } from "./utils/routes";
import Registration from "./components/Registration";
import OrderStatusLookup from "./components/OrderStatusLookup";
import ThankYou from "./components/ThankYou";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={ROUTE_PATHS.BASE} component={Registration} />
            <Route exact path={ROUTE_PATHS.CONFIRMATION} component={ThankYou} />
            <Route exact path={ROUTE_PATHS.OSL} component={OrderStatusLookup} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
