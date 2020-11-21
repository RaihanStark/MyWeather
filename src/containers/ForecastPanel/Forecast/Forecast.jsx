import React from "react";
import styled from "styled-components";
import getIcon from "../../../icons";

import { StyledCard } from "../../../components/styled";
import { Card, CardBody, CardSubtitle } from "reactstrap";

const Temp = styled.div`
  font-size: 0.8em;
`;

function Forecast(props) {
  return (
    <StyledCard temp className="mb-4">
      <CardSubtitle tag="h6" className="mb-2">
        {props.day}
      </CardSubtitle>
      <img src={getIcon(props.type)} alt="weather icon" width="64px" />
      <Temp>
        <span className="highest">{props.highest}°</span>
        <span className="lowest">{props.lowest}°</span>
      </Temp>
    </StyledCard>
  );
}

export default Forecast;
