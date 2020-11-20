import React from "react";

import TempToggle from "../TempToggle/TempToggle";
import { TextHeader } from "../styled";

import styled from "styled-components";

const Toggler = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.MediaQueries.xs} {
    flex-direction: column;
  }
`;

function Header(props) {
  return (
    <Toggler>
      <div className="d-flex mb-4 mb-sm-0">
        <TextHeader>Today</TextHeader>
        <TextHeader className="ml-4" active underline>
          Week
        </TextHeader>
      </div>

      <div className="d-flex">
        <TempToggle selected={props.units} toggled={props.toggled}></TempToggle>
      </div>
    </Toggler>
  );
}

export default Header;
