import React from 'react';
import { Container } from '../base';
import styled from 'styled-components';
import Navbar from '../sub/NavBar';

const StyledHeader = styled(Container).attrs({
    as: "header"
})`
    background-color:${props => props.theme.colors.secondary};
`

const Header = () => {
    return (
        <StyledHeader>
            <Navbar />
        </StyledHeader>
    )
}
export default Header