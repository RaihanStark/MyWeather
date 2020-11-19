import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

import SearchEngine from "../../components/SearchEngine/SearchEngine";

import TodayForecast from "../../components/TodayForecast/TodayForecast";
const DashboardCol = styled(Col)`
  background-color: #f6f6f7;
  height: 100vh;
`;

function Layout(props) {
  return (
    <Row noGutters>
      {/* Side Bar */}
      <Col md="3" className="p-5 mt-2">
        <SearchEngine
          handler={props.changeCityHandler}
          locateHandler={props.locateHandler}
        />
        <TodayForecast data={props.today_data} />
      </Col>
      {/* Dashboard */}
      <DashboardCol md="9" style={{ padding: "3rem 4rem" }}>
        {props.children}
      </DashboardCol>
    </Row>
  );
}

export default Layout;
