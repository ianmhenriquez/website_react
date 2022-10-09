import React, { useState } from "react";
import styled from 'styled-components'
import { Container, Row, Column } from "../base";
import { device } from "../base/devices";
import { useSpring, animated, useChain, useTransition, useSpringRef, config } from "react-spring";
import Tilt from 'react-parallax-tilt';

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
    const fromLeft = useSpring({
        from: { opacity: 0, marginLeft: -100, marginRight: 100 },
        to: { opacity: 1, marginLeft: 0, marginRight: 0 }
    });

    const fromRight = useSpring({
        from: { opacity: 0, marginLeft: 100, marginRight: -100 },
        to: { opacity: 1, marginLeft: 0, marginRight: 0 }
    });

    const fromTop = useSpring({
        from: { opacity: 0, marginBottom: 100, marginTop: -100 },
        to: { opacity: 1, marginBottom: 0, marginTop: 20 }
    });

    return (
        <Container justifyContent="center" >
            <StyledRow>
                <StyledTilt>
                    <Card direction="column" on>
                        <AnimatedH1 style={fromLeft}>
                            Title placeHolder
                        </AnimatedH1>
                        <AnimatedTile style={fromLeft}>
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
                <StyledTilt>
                    <Card direction="column">
                        <AnimatedH1 style={fromRight}>
                            Title placeHolder
                        </AnimatedH1>
                        <AnimatedTile style={fromRight}>
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