import React, { useState } from "react";
import styled from 'styled-components'
import { Container, Row } from "../base";
import { NavLink } from "react-router-dom";
import { device } from "../base/devices";
import HamburgerIcon from "../icons/hamburger";
import LogoIcon from "../icons/logo";
import { useSpring, animated, useChain, useTransition, useSpringRef, config } from "react-spring";

const StyledNav = styled(Container).attrs({
    as: "nav"
})`
   width:100%;
   justify-Content:${props => props.theme.justifyContent.center};
   flex-direction:column;
   align-items:center;
   @media ${device.laptopL}{
    padding-bottom:${props => props.theme.spacing.inset};
    padding-top:${props => props.theme.spacing.inset};
   }
   @media ${device.mobileL}{
    padding-bottom:0;
    padding-top:0;
   }

`

const AnimatedNav = styled(animated(StyledNav))`
   width:100%;
   justify-Content:${props => props.theme.justifyContent.center};
   flex-direction:column;
   align-items:center;
   @media ${device.laptopL}{
    padding-bottom:${props => props.theme.spacing.inset};
    padding-top:${props => props.theme.spacing.inset};
   }
   @media ${device.mobileL}{
    padding-bottom:0;
    padding-top:0;
   }
`;

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


const AnimatedIcon = styled(animated.div)`
    background-color:pink;
`

const Item = styled(Container)`
    flex-direction:column;
    align-items:center;
    height:100%;
    justify-content:space-evenly;
`;

const StyledNavLink = styled(animated(NavLink))`
    text-decoration:none;
    color:white;
    &.active {
        color:black;
    }

`;

const navItems = [
    { name: 'Projects', link: '/projects' },
    { name: 'Downloads', link: '/downloads' },
    { name: 'Contact', link: '/contact' }
]


const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false);
    const openMenu = useSpringRef();
    const navMenu = useSpringRef();
    const entireNav = useSpringRef();

    const RightMenu = useSpring({
        ref: openMenu,
        springConfig: config.default,
        from: { width: '0%', height: '0%' },
        to: { width: isOpened ? '100%' : '0%', height: isOpened ? '100%' : '0%' },
    });

    const wholeMenu = useSpring({
        ref: entireNav,
        springConfig: config.default,
        from: { height: '10vh'},
        to: {height: isOpened ? '25vh' : '10vh'}
    });

    const listTransition = useTransition(isOpened ? navItems : [],
        {
            ref: navMenu,
            trail: 400 / navItems.length,
            from: { opacity: 0, transform: 'translateY(20px)' },
            enter: { opacity: 1, transform: 'translateY(0)' },
            leave: { opacity: 0, transform: 'translateY(20px)' }
        }
    )

    const fragment = listTransition((style, navItems) => {
        return <StyledNavLink style={style} className={({ isActive }) => (isActive ? "active" : "inactive")} to={navItems.link}>
            {navItems.name}</StyledNavLink>
    });

    useChain(isOpened ? [entireNav, openMenu, navMenu] : [navMenu, openMenu, entireNav], [0, isOpened ? 0.5 : 0.6]);

    return (
        <AnimatedNav  style={wholeMenu}>
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
            </StyledRow>
            <AnimatedIcon style={RightMenu} >
                <Item >
                    {fragment}
                </Item>
            </AnimatedIcon>
        </AnimatedNav>
    );
}

export default Navbar;