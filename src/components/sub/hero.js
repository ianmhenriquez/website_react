import React from 'react';
import styled from 'styled-components';
import { Container, Row, Column } from "../base";
import { device } from "../base/devices";
import { useSpring, animated, useChain, useTransition, useSpringRef, config } from "react-spring";
import hero from '../images/hero.PNG';

const StyledContainer = styled(Container)`
    width:100%;
    height:100vh;
    background-image: url(${hero});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position:center;
    background-size:cover;

`;

const Hero = () =>{
    return(
        <StyledContainer>

        </StyledContainer>
    )
}
export default Hero;