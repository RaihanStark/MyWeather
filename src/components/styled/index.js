import styled, { css } from "styled-components";
import { Card } from "reactstrap";

export const TextHeader = styled.div`
  color: ${(props) => (props.active ? "black" : "#a4a6ac")};
  font-size: 1.3em;
  font-weight: 600;
  border-bottom: ${(props) => (props.underline ? "black solid 2px" : "none")};
`;

export const StyledCard = styled(Card)`
  && {
    border: none;
    border-radius: 1em;
    font-weight: 500;
    padding: 1.5em;
    ${({ temp }) =>
      temp &&
      css`
        text-align: center;
      `}
    img {
      margin: 1em auto;
    }

    .lowest {
      margin-left: 0.3em;
      color: rgb(199, 199, 199);
    }

    h6 {
      margin: 0;
    }
  }
`;
