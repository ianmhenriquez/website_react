import React from "react";
import styled from 'styled-components'
import { Container, Row } from "../base";
import { NavLink } from "react-router-dom";

const StyledNav = styled(Container).attrs({
    as: "nav"
})`
   width:100%;
   justify-Content:${props => props.theme.justifyContent.center};
   padding-top:${props => props.theme.spacing.doubleInset};
   padding-bottom:${props => props.theme.spacing.doubleInset};
`

const LinkItem = styled.div`
    display:flex;
    width: ${props => props.width ? [props.width] : '100%'};
    justify-content:space-between;

`;

const Navbar = () => {
    return (
        <StyledNav>
            <Row justifyContent="end">
                <LinkItem width="75%">
                    <NavLink style={{textDecoration: 'none', color:'white'}} to="/">Temp home</NavLink>
                </LinkItem>
                <LinkItem width="25%">
                    <NavLink style={{textDecoration: 'none', color:'white'}} to="/projects">Projects</NavLink>
                    <NavLink style={{textDecoration: 'none', color:'white'}} to="/downloads">Downloads</NavLink>
                    <NavLink style={{textDecoration: 'none', color:'white'}} to="/contact">Contact</NavLink>
                </LinkItem>
            </Row>
        </StyledNav>
    );
}

export default Navbar;