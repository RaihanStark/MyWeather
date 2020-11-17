import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudShowersHeavy,
  faCloudSun,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

import "./Forecast.scss";

const icons = {
  Rain: faCloudShowersHeavy,
  Clear: faSun,
  Clouds: faCloudSun,
  Snow: faSnowflake,
};

function Forecast(props) {
  return (
    <div className={"forecast " + (props.today ? "today " : null)}>
      <span className="day">{props.day}</span>
      <div className="icons">
        <FontAwesomeIcon icon={icons[props.type]} size="3x" />
      </div>
      <div className="temp">
        <span className="highest">{props.highest}°</span>
        <span className="lowest">{props.lowest}°</span>
      </div>
    </div>
  );
}

export default Forecast;
