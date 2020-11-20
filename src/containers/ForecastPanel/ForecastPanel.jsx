import React from "react";
import { Row, Col } from "reactstrap";
import Forecast from "./Forecast/Forecast";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
class ForecastPanel extends React.Component {
  render() {
    let data = (
      <FontAwesomeIcon spin icon={faSync} className="mt-5" size="3x" />
    );
    if (this.props.data.length === 5) {
      data = this.props.data.map((el, i) => {
        return (
          <Col>
            <Forecast
              key={i}
              day={el.day}
              type={el.weather}
              highest={el.max}
              lowest={el.min}
            />
          </Col>
        );
      });
    }
    return <Row className="mt-5">{data}</Row>;
  }
}
export default ForecastPanel;
