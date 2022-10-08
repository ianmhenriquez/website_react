import React from "react";
import styled from 'styled-components'
import { Container, Row, Column } from "../base";
import { device } from "../base/devices";
import { useSpring, animated, useChain, useTransition, useSpringRef, config } from "react-spring";

const AnimatedTile = styled(animated(Container))`
    background-color:pink;
`;

const StyledRow = styled(Row)`
    align-items:flex-start;
    justify-content:space-between;
    @media ${device.mobileL}{
        align-items:center;
    }
`;

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
                <Container direction="column">
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
                </Container>
                <Container direction="column">
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
                </Container>
            </StyledRow>
        </Container>
    );
}

export default Home;