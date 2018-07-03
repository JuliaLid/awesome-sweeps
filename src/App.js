import React, { Component } from "react";
import Registration from "./components/Registration";
// import { ROUTE_PATHS } from './utils/routes'
// import OSL from "./components/OSL";
// import ThankYou from "./components/ThankYou";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Registration />
        {/* <OSL /> */}
        {/* <ThankYou /> */}
      </div>
    );
  }
}

export default App;
