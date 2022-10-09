import React from "react";
import styled from 'styled-components'
import { Container, Row, Column } from "../base";
import { device } from "../base/devices";
import { useSpring, animated, useChain, useTransition, useSpringRef, config } from "react-spring";

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
    width:30%;
    align-items:center;
    padding-bottom:30px;
    @media ${device.mobileL}{
        width:75%;
    }
`

const AnimatedH1 = styled(animated.h1)`
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
    })

    return (
        <Container justifyContent="center">
            <StyledRow>
                <Card direction="column">
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
            </StyledRow>
        </Container>
    )
}
export default Cards;