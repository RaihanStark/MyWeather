import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import getIcon from "../../icons";

// eslint-disable-next-line
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const TodayTemps = styled.div`
  font-family: "Open Sans", sans-serif;

  font-size: 7em;
  letter-spacing: -5px;

  @media ${({ theme }) => theme.MediaQueries.xs} {
    font-size: 5em;
  }

  @media ${({ theme }) => theme.MediaQueries.lg} {
    font-size: 6em;
  }
`;

const TodayMetric = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 3em;
  margin-top: 0.5em;
  font-weight: 600;
  margin-left: 13px;

  @media ${({ theme }) => theme.MediaQueries.xs} {
    font-size: 2.3em;
  }
  @media ${({ theme }) => theme.MediaQueries.lg} {
    font-size: 2.6em;
  }
`;

const Date = styled.div`
  font-size: 1.5em;

  @media ${({ theme }) => theme.MediaQueries.xs} {
    font-size: 1em;
  }
  @media ${({ theme }) => theme.MediaQueries.lg} {
    font-size: 1.3em;
  }
`;

const Icon = styled.img`
  max-width: 312px;
`;

function TodayForecast(props) {
  let temp = "-";
  let type = null;
  let desc = null;
  let dt = null;
  let country = null;
  if (props.data.main !== undefined) {
    country = `${props.data.name}, ${props.data.sys.country}`;
    dt = (
      <Moment unix format="dddd, LT">
        {props.data.dt}
      </Moment>
    );
    type = props.data.weather[0].icon;
    desc = props.data.weather[0].description.capitalize();
    temp = parseInt(props.data.main.temp);
  }

  return (
    <div className="pl-2 mb-5">
      <Icon src={getIcon(type)} className="mt-5" />
      <div className="d-flex">
        <TodayTemps>{temp}</TodayTemps>
        <TodayMetric>°C</TodayMetric>
      </div>
      <Date>
        {dt}
        <br />
      </Date>
      <hr className="my-5" />

      <div className="d-flex">
        <Icon src={getIcon(type)} width="32px" />
        <div className="ml-3 my-3">{desc}</div>
      </div>
      <div className="d-flex">
        <Icon src={getIcon("location")} width="32px" />
        <div className="ml-3 my-3">
          <span>{country}</span>
        </div>
      </div>
    </div>
  );
}

export default TodayForecast;
