import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

import SearchEngine from "../../components/SearchEngine/SearchEngine";

const DashboardCol = styled(Col)`
  background-color: #f6f6f7;
  height: 100vh;
`;

function Layout(props) {
  return (
    <Row noGutters>
      <Col md="3" className="p-5 mt-2">
        <SearchEngine handler={props.changeCityHandler} />
      </Col>
      <DashboardCol md="9" className="p-5">
        {props.children}
      </DashboardCol>
    </Row>
  );
}

export default Layout;
