import React from "react";
import {Container} from '../base/core';
import styled from 'styled-components';

const StyledFooter = styled(Container).attrs({
  as: "footer"
})`
    background-color:${props => props.theme.colors.defaultTertiary};
`;

const Footer  = () => {
  return (
    <StyledFooter>
      <p>
        footer place
      </p>
    </StyledFooter>
  );
}

export default Footer;