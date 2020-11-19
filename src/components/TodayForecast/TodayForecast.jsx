import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudShowersHeavy,
  faCloudSun,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const TodayTemps = styled.div`
  font-family: "Open Sans", sans-serif;

  font-size: 7em;
  letter-spacing: -13px;
`;

const TodayMetric = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 3em;
  margin-top: 0.5em;
  font-weight: 600;
  margin-left: 13px;
`;
const icons = {
  Rain: faCloudShowersHeavy,
  Clear: faSun,
  Clouds: faCloudSun,
  Snow: faSnowflake,
};

function TodayForecast() {
  return (
    <div className="">
      <FontAwesomeIcon
        icon={icons.Clear}
        className="mt-5"
        style={{ fontSize: "14em" }}
      />
      <div className="d-flex">
        <TodayTemps>12</TodayTemps>
        <TodayMetric>°C</TodayMetric>
      </div>
    </div>
  );
}

export default TodayForecast;
