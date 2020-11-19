import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudShowersHeavy,
  faCloudSun,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Moment from "react-moment";

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

const Date = styled.div`
  font-size: 1.5em;
`;

const icons = {
  Rain: faCloudShowersHeavy,
  Clear: faSun,
  Clouds: faCloudSun,
  Haze: faCloudSun,
  Snow: faSnowflake,
};

function TodayForecast(props) {
  let temp = "-";
  let type = null;
  let dt = null;
  let country = null;
  if (props.data.main != undefined) {
    country = `${props.data.name}, ${props.data.sys.country}`;
    dt = (
      <Moment unix format="dddd, LT">
        {props.data.dt}
      </Moment>
    );
    type = props.data.weather[0].main;
    temp = parseInt(props.data.main.temp);
  }
  return (
    <div className="">
      <FontAwesomeIcon
        icon={icons[type]}
        className="mt-5"
        style={{ fontSize: "14em" }}
      />
      <div className="d-flex">
        <TodayTemps>{temp}</TodayTemps>
        <TodayMetric>°C</TodayMetric>
      </div>
      <Date>
        {dt}
        <br />
        <span style={{ fontSize: ".8em" }}>{country}</span>
      </Date>
      <hr className="my-5" />

      <div>
        <div className="d-flex">
          <FontAwesomeIcon icon={icons[type]} size="lg" className="my-3" />
          <div className="ml-3 my-3">Mostly Cloudly</div>
        </div>
        <div className="d-flex">
          <FontAwesomeIcon icon={icons[type]} size="lg" className="my-3" />
          <div className="ml-3 my-3">Rain - 30%</div>
        </div>
      </div>
    </div>
  );
}

export default TodayForecast;
