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
    width:45%;
    align-items:center;
    @media ${device.mobileL}{
        width:75%;
    }
`

const AnimatedH1 = styled(animated.h1)`
`;

const Home = () => {

    const fromLeft = useSpring({
        from: { opacity: 0, marginLeft: -100, marginRight: 100 },
        to: { opacity: 1, marginLeft: 0, marginRight: 0 }
    });

    const fromRight = useSpring({
        from: { opacity: 0, marginLeft: 100, marginRight: -100 },
        to: { opacity: 1, marginLeft: 0, marginRight: 0 }
    });

    return (
        <Container justifyContent="center">
            <StyledRow>
                <Card direction="column" width="45%">
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
    );
}

export default Home;