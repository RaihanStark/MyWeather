import React, { Component } from "react";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
  Footer,
  Anchor,
  Text,
} from "grommet";
import { FormClose, Notification } from "grommet-icons";

import ForecastPanel from "./containers/ForecastPanel/ForecastPanel";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
      grey: "#F6F6F7",
    },
    font: {
      family: "Poppins",
      size: "14px",
      height: "20px",
    },
  },
};
class App extends Component {
  render() {
    return (
      <Grommet theme={theme} full>
        <Box fill background="grey">
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <Box flex align="center" justify="center">
              <ForecastPanel />
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default App;
