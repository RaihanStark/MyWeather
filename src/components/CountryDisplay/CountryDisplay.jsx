import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import styled from "styled-components";

const Overlay = styled.div`
  background-color: #1e1714a9;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 1.5em;
`;
function CountryDisplay(props) {
  return (
    <div className="mt-5">
      <Card inverse style={{ height: "9em", borderRadius: "1.5em" }}>
        <Overlay />
        <CardImg
          width="100%"
          style={{ height: "8.9em", objectFit: "cover", borderRadius: "1.5em" }}
          src={`https://restcountries.eu/data/${props.country}.svg`}
        />
        <CardImgOverlay className="d-flex justify-content-center align-items-center">
          <CardTitle tag="h4" className="text-center">
            {props.city}
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
}

export default CountryDisplay;
