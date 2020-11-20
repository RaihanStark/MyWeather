import styled from "styled-components";

export const TextHeader = styled.div`
  color: ${(props) => (props.active ? "black" : "#a4a6ac")};
  font-size: 1.3em;
  font-weight: 600;
  border-bottom: ${(props) => (props.underline ? "black solid 2px" : "none")};
`;
