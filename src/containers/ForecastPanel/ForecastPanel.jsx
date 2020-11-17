import React from "react";
import "./ForecastPanel.scss";

import Forecast from "./Forecast/Forecast";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
class ForecastPanel extends React.Component {
  render() {
    let data = <FontAwesomeIcon spin icon={faSync} size="3x" />;
    if (this.props.data.length === 5) {
      data = this.props.data.map((el, i) => {
        return (
          <Forecast
            key={i}
            day={el.day}
            type={el.weather}
            highest={el.max}
            lowest={el.min}
          />
        );
      });
    }
    return <div className="panel">{data}</div>;
  }
}
export default ForecastPanel;
