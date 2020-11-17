import React from "react";
import { faSearch, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
`;

const Input = styled.input`
  border: none;
  height: 2em;
  flex-grow: 1;
  color: black;
  font-weight: 500;

  ::placeholder {
    color: black;
  }

  :focus {
    outline: none;
  }
`;

const LocateMe = styled.div`
  background-color: #f6f6f7;
  padding: 0.4em;
  text-align: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

function SearchEngine(props) {
  return (
    <Container>
      <FontAwesomeIcon icon={faSearch} className="mr-3" size="md" />
      <Input
        onChange={(e) => {
          props.handler(e.target.value);
        }}
        type="text"
        placeholder="Search for places . . ."
      />
      <LocateMe>
        <FontAwesomeIcon icon={faLocationArrow} />
      </LocateMe>
    </Container>
  );
}

export default SearchEngine;
