import React from "react";
import styled from "styled-components";

const Toggler = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.div`
  background-color: ${(props) => (props.active ? "#1e1714" : "white")};
  color: ${(props) => (props.active ? "white" : "#1e1714")};
  margin: 0 0.3em;
  padding: 0.5em;
  border-radius: 50%;
  width: 46px;
  font-size: 1.2em;
  font-weight: 500;
  text-align: center;
`;
function TempToggle() {
  return (
    <Toggler>
      <Button active>°C</Button>
      <Button>°F</Button>
    </Toggler>
  );
}

export default TempToggle;
