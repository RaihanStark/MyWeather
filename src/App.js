import React, { Component } from "react";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext
} from "grommet";
import { FormClose, Notification } from "grommet-icons";

import ForecastPanel from "./containers/ForecastPanel/ForecastPanel";

const theme = {
  global: {
    colors: {
      brand: "#228BE6"
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

class App extends Component {
  render() {
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill>
              <AppBar>
                <Heading level="3" margin="none">
                  MyWeather
                </Heading>
                <Button icon={<Notification />} />
              </AppBar>
              <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                <Box flex align="center" justify="center">
                  <ForecastPanel />
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
