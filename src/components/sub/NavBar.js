import React, { useState } from "react";
import styled from 'styled-components'
import { Container, Row } from "../base";
import { NavLink } from "react-router-dom";
import { device } from "../base/devices";
import HamburgerIcon from "../icons/hamburger";
import LogoIcon from "../icons/logo";
import { useSpring, animated } from "react-spring";


const StyledNav = styled(Container).attrs({
    as: "nav"
})`
   width:100%;
   justify-Content:${props => props.theme.justifyContent.center};
   padding-top:${props => props.theme.spacing.doubleInset};
   padding-bottom:${props => props.theme.spacing.doubleInset};
`

const LinkItemBurger = styled.div`
    display:flex;
    width:25%;
    justify-content:space-between;

    @media ${device.mobileL} { 
        display:none;
    }

`;

const LinkItem = styled.div`
    display:flex;
    width:75%;
    justify-content:space-between;
`;



const StyledRow = styled(Row)`
    @media ${device.mobileL} { 
        flex-direction:row;
        justify-content:space-around;
    }
`;

const iconContainer = styled.div`
`
const AnimatedIcon = styled(animated(iconContainer))`
`;

const Item = styled(Container)`
    flex-direction:column;
    align-items:center;
    height:100%;
    justify-content:space-evenly;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration:none;
    color:white;
    &.active {
        color:black;
    }

`;


const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false);
    const RightMenu = useSpring({
        transform: isOpened ? 'translateX(0)' : 'translateX(100%)',
        transform: isOpened ? 'translateY(0' : 'translateY(100%)',
        opacity: isOpened ? 1 : 0
    });
    const {
        size,
        ...springProps
    } = useSpring({
        size: isOpened ? 400 : 0,
    });

    return (
        <StyledNav>
            <StyledRow justifyContent="end">
                <LinkItem>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/">
                        <LogoIcon iconColor="defaultSecondary" />
                    </NavLink>
                </LinkItem>
                <LinkItemBurger>
                    <StyledNavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/projects">Projects</StyledNavLink>
                    <StyledNavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/downloads">Downloads</StyledNavLink>
                    <StyledNavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/contact">Contact</StyledNavLink>
                </LinkItemBurger>
                <div onClick={() => setIsOpened(e => !e)}>
                    <HamburgerIcon />
                </div>
                <animated.div style={RightMenu}>
                    <AnimatedIcon style={{ height: size, width: size, ...springProps }} >
                        <Item >
                            <StyledNavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/projects">Projects</StyledNavLink>
                            <StyledNavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/downloads">Downloads</StyledNavLink>
                            <StyledNavLink className={({ isActive }) => (isActive ? "active" : "inactive")} to="/contact">Contact</StyledNavLink>
                        </Item>
                    </AnimatedIcon>
                </animated.div>
            </StyledRow>
        </StyledNav>
    );
}

export default Navbar;