import React from "react";
import { TextHeader, StyledCard } from "../styled";
import { Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import styled from "styled-components";

const StyledTitle = styled.h5`
  color: ${({ theme }) => theme.colors.darkgrey};
  font-weight: 400;
`;

function DetailedWeather(props) {
  return (
    <div>
      <TextHeader active className="mb-5">
        Today's Highlights
      </TextHeader>
      <Row>
        <Col>
          <StyledCard className="mb-3">
            <StyledTitle>UV Index</StyledTitle>

            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </StyledCard>
        </Col>
        <Col>
          <StyledCard className="mb-3">
            <StyledTitle>UV Index</StyledTitle>

            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </StyledCard>
        </Col>
        <Col>
          <StyledCard className="mb-3">
            <StyledTitle>UV Index</StyledTitle>

            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </StyledCard>
        </Col>
      </Row>
      <Row>
        <Col>
          <StyledCard className="mb-3">
            <StyledTitle>UV Index</StyledTitle>

            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </StyledCard>
        </Col>
        <Col>
          <StyledCard className="mb-3">
            <StyledTitle>UV Index</StyledTitle>

            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </StyledCard>
        </Col>
        <Col>
          <StyledCard className="mb-3">
            <StyledTitle>UV Index</StyledTitle>

            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </StyledCard>
        </Col>
      </Row>
    </div>
  );
}

export default DetailedWeather;
