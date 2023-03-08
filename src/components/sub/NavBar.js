import React, { useState } from "react";
import styled from 'styled-components'
import { Container, Row, Column } from "../base";
import { NavLink } from "react-router-dom";
import { device } from "../base/devices";
import HamburgerIcon from "../icons/hamburger";
import LogoIcon from "../icons/logo";
import HeroImg from "../images/hero.PNG";
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

const StyledColumn = styled(Column)`
    height:100%;
    align-items:center;
    @media ${device.mobileL}{
        flex-direction:row;
    }
    @media ${device.tablet} {
        align-items:flex-start;
    }
    @media (orientation:landscape) and (max-width: 1024px){
        align-items:flex-start;   
    }

`;

const Button = styled.button`
    display:flex;
    width:100%;
    height:100%;
    border:none;
    cursor:pointer;
    outline:none;
    background-color:transparent;
    justify-content:${props => props.theme.justifyContent.center};
    align-items:${props => props.theme.alignItems.center};
    @media ${device.mobileL}{
        justify-content:${props => props.theme.justifyContent.end};
    }

`;

const AnimatedNav = styled(animated(StyledNav))`
   width:100%;
   justify-Content:${props => props.theme.justifyContent.center};
   flex-direction:column;
   align-items:center;
`;


const LinkItem = styled.div`
    display:flex;
    width:75%;
    justify-content:space-between;
`;



const StyledRow = styled(Row)`  
    flex-direction:row;
    justify-content:space-around;

`;


const AnimatedIcon = styled(animated.div)`
    background-color:#030200;
    opacity:0.8;
`

const Item = styled(Container)`
    flex-direction:column;
    align-items:center;
    height:100%;
    justify-content:space-evenly;
`;

const StyledLinkContainer = styled(Container)`
    border:1px solid white;
    width:100%;
    height:calc(100% / 3);
    justify-content:${props => props.theme.justifyContent.end};
    align-items:${props => props.theme.alignItems.center};
    padding-right:${props => props.theme.spacing.doubleInset};
    overflow:hidden;
`;

const StyledLinkTriangle = styled(animated.div)`
    display:flex;
    position:absolute;
    transform:rotate(-50deg);
    clip-path:polygon(0 0, 100% 0, 100% 100%);
    border-top:1px solid white;
    width:50%;
    height:50%;
    @media ${device.mobileL}{
        width:100%;
        height:100%;
    }
`;

const StyledLink = styled(animated(NavLink))`
    text-decoration:none;
    font-size:1.5rem;
    color:white;
    &.active {
        color:gold;
    }

`;

const navItems = [
    { name: 'Projects', link: '/projects', img : HeroImg },
    { name: 'Downloads', link: '/downloads', img : HeroImg },
    { name: 'Contact', link: '/contact', img : HeroImg }
]

const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center;
`;



const Navbar = () => {
    //when a link is clicked the menu should close
    var isDesktop = window.innerWidth > 1024;
    const [isOpened, setIsOpened] = useState(false);
    const sideMenu = useSpringRef();
    const menuItems = useSpringRef();
    const entireNav = useSpringRef();

    const RightMenu = useSpring({
        ref: sideMenu,
        springConfig: config.default,
        from: isDesktop ? { width: '0%', height: '0%' } : { width: '0%', height: '0%' },
        to: isDesktop ? { width: isOpened ? '100%' : '0%', height: isOpened ? '100%' : '0%' }
            : { width: isOpened ? '100%' : '0%', height: isOpened ? '100%' : '0%' }

    });

    const wholeMenu = useSpring({
        ref: entireNav,
        springConfig: config.default,
        from: isDesktop ? { height: '10vh' } : { height: '10vh' },
        to: isDesktop ? { height: isOpened ? '100vh' : '10vh' } : { height: isOpened ? '25vh' : '10vh' }
    });

    const listTransition = useTransition(isOpened ? navItems : [],
        {
            ref: menuItems,
            trail: 400 / navItems.length,
            from: { opacity: 0, transform: 'translateY(20px)' },
            enter: { opacity: 1, transform: 'translateY(0)' },
            leave: { opacity: 0, transform: 'translateY(20px)' }
        }
    );

    const fragment = listTransition((style, navItems) => {
        return (
            <StyledLinkContainer>
                <Column>
                <Image src={navItems.img} />
                </Column>
                <StyledColumn>
                    <StyledLinkTriangle />
                    <Button  onClick={() => setIsOpened(e => !e)} >
                        <StyledLink style={style} className={({ isActive }) => (isActive ? "active" : "inactive")} to={navItems.link}>
                            {navItems.name}
                        </StyledLink>
                    </Button>
                </StyledColumn>
            </StyledLinkContainer>
        )
    });

    useChain(isOpened ? [entireNav, sideMenu, menuItems] : [menuItems, sideMenu, entireNav], [0, isOpened ? 0.5 : 0.6]);
    return (
        <AnimatedNav style={wholeMenu}>
            <StyledRow justifyContent="end">
                <LinkItem>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/">
                        <LogoIcon iconColor="defaultSecondary" />
                    </NavLink>
                </LinkItem>
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