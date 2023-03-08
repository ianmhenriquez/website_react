import React, { useState } from "react";
import styled from 'styled-components'
import { Container, Row, Column } from "../base";
import { device } from "../base/devices";
import { useSpring, animated, useChain, useTransition, useSpringRef, config } from "react-spring";
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';

const AnimatedTile = styled(animated(Container))`
    background-color:pink;
    width:100%;
`;

const StyledRow = styled(Row)`
    align-items:flex-start;
    justify-content:space-between;
    @media ${device.mobileL}{
        align-items:center;
    }
`;

const Card = styled(animated(Container))`
    width:100%;
    align-items:center;
    padding-bottom:30px;
`

const AnimatedH1 = styled(animated.h1)`
`;

const StyledTilt = styled(Tilt)`
    width:30%;
    @media ${device.mobileL}{
        width:75%;
    }
`;



const Cards = () => {
    //make animation happen when entering scroll position
    //to do this we need to use a ref to the element we want to animate and a ref to the animation itself 
    const {ref, inView} = useInView()

    const fromTop = useSpring({
        from: { opacity: 0, marginBottom: 100, marginTop: -100 },
        to: { opacity: inView ? 1 : 0, marginBottom: inView ? 0 : 100, marginTop: inView ? 20 : -100 }
    });

    return (
        <Container justifyContent="center" ref={ref} >
            <StyledRow>
                <StyledTilt>
                    <Card direction="column" width="45%">
                        <AnimatedH1 style={fromTop}>
                            Title placeHolder
                        </AnimatedH1>
                        <AnimatedTile style={fromTop}>
                            <Row direction="direction">
                                <Column>
                                    <p>picture placeholder</p>
                                </Column>
                                <Column>
                                    <p>
                                        text
                                    </p>
                                </Column>
                            </Row>
                        </AnimatedTile>
                    </Card>
                </StyledTilt>
            </StyledRow>
        </Container>
    )
}
export default Cards;