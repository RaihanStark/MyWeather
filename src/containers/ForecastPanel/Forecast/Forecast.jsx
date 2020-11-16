import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudShowersHeavy,
  faCloudSun,
  faSnowflake,
  faSun
} from "@fortawesome/free-solid-svg-icons";

import "./Forecast.scss";

const icons = {
  rainy: faCloudShowersHeavy,
  sunny: faSun,
  cloudy: faCloudSun,
  snowy: faSnowflake
};

function Forecast(props) {
  return (
    <div className={"forecast " + (props.active ? "active " : null)}>
      <span className="day">Monday</span>
      <div className="icons">
        <FontAwesomeIcon icon={icons[props.type]} size="3x" />
      </div>
      <div className="temp">
        <span className="highest">6°</span>
        <span className="lowest">1°</span>
      </div>
    </div>
  );
}

export default Forecast;
