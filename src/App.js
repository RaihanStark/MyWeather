import React, { Component } from "react";

import ForecastPanel from "./containers/ForecastPanel/ForecastPanel";
import Layout from "./hoc/Layout/Layout";

import "./entry.scss";

class App extends Component {
  render() {
    return (
      <Layout>
        <ForecastPanel />
      </Layout>
    );
  }
}

export default App;
