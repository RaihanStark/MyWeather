import React from "react";
import "./ForecastPanel.scss";

import Forecast from "./Forecast/Forecast";
class ForecastPanel extends React.Component {
  render() {
    return (
      <div className="panel">
        <div>
          <Forecast type="rainy" active />
        </div>
        <div>
          <Forecast type="sunny" />
        </div>
        <div>
          <Forecast type="rainy" />
        </div>
        <div>
          <Forecast type="cloudy" />
        </div>
        <div>
          <Forecast type="cloudy" />
        </div>
      </div>
    );
  }
}
export default ForecastPanel;
