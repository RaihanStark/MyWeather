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
  cursor: ${(props) => (props.active ? "default" : "pointer")};
`;

function TempToggle(props) {
  return (
    <Toggler>
      <Button
        active={props.selected === "c" ? true : false}
        onClick={props.selected === "c" ? null : props.toggled}
      >
        °C
      </Button>
      <Button
        active={props.selected === "f" ? true : false}
        onClick={props.selected === "f" ? null : props.toggled}
      >
        °F
      </Button>
    </Toggler>
  );
}

export default TempToggle;
