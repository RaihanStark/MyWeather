import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

import SearchEngine from "../../components/SearchEngine/SearchEngine";

import TodayForecast from "../../components/TodayForecast/TodayForecast";
const DashboardCol = styled(Col)`
  background-color: ${({ theme }) => theme.colors.grey};
  height: auto !important;
`;

function Layout(props) {
  return (
    <Row noGutters className="h-100">
      {/* Side Bar */}
      <Col lg="4" xl="3" className="p-4 p-sm-5 mt-2">
        <SearchEngine
          handler={props.changeCityHandler}
          locateHandler={props.locateHandler}
        />
        <TodayForecast data={props.today_data} />
      </Col>
      {/* Dashboard */}
      <DashboardCol lg="8" xl="9" style={{ padding: "3rem 4rem" }}>
        {props.children}
      </DashboardCol>
    </Row>
  );
}

export default Layout;
