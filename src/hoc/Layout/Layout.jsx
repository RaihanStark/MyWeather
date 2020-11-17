import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const DashboardCol = styled(Col)`
  background-color: #f6f6f7;
  height: 100vh;
`;

function Layout(props) {
  return (
    <Container fluid>
      <Row noGutters>
        <Col md="2"></Col>
        <DashboardCol md="10" className="p-5">
          {props.children}
        </DashboardCol>
      </Row>
    </Container>
  );
}

export default Layout;
