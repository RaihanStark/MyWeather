import React from "react";

import TempToggle from "../TempToggle/TempToggle";
import styled from "styled-components";

const Toggler = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.MediaQueries.xs} {
    flex-direction: column;
  }
`;

const TextLink = styled.div`
  color: ${(props) => (props.active ? "black" : "#a4a6ac")};
  font-size: 1.3em;
  font-weight: 600;
  border-bottom: ${(props) => (props.active ? "black solid 2px" : "none")};
`;
function Header(props) {
  return (
    <Toggler>
      <div className="d-flex mb-4 mb-sm-0">
        <TextLink>Today</TextLink>
        <TextLink className="ml-4" active>
          Week
        </TextLink>
      </div>

      <div className="d-flex">
        <TempToggle selected={props.units} toggled={props.toggled}></TempToggle>
      </div>
    </Toggler>
  );
}

export default Header;
