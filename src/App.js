import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import ForecastPanel from "./containers/ForecastPanel/ForecastPanel";
import Layout from "./hoc/Layout/Layout";
import styled from "styled-components";

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
