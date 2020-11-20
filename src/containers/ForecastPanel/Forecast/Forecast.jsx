import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudShowersHeavy,
  faCloudSun,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
import getIcon from "../../../icons";

const ForecastItem = styled.div`
  text-align: center;
  padding: 1.5em 1.5em;
  background-color: white;
  border-radius: 1em;
  font-weight: 500;
  font-size: 1em;

  .icons {
    margin: 1em 0;
  }

  .temp {
    font-size: 0.8em;
  }

  .lowest {
    margin-left: 0.3em;
    color: rgb(199, 199, 199);
  }
`;

function Forecast(props) {
  return (
    <ForecastItem className="mb-4">
      <span className="day">{props.day}</span>
      <div className="icons">
        <img src={getIcon(props.type)} width="64px" />
      </div>
      <div className="temp">
        <span className="highest">{props.highest}°</span>
        <span className="lowest">{props.lowest}°</span>
      </div>
    </ForecastItem>
  );
}

export default Forecast;
