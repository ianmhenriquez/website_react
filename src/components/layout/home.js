import React from "react";
import styled from 'styled-components'
import { Container, Row } from "../base";
import { device } from "../base/devices";
import { useSpring, animated, useChain, useTransition, useSpringRef, config } from "react-spring";

const AnimatedTile = styled(animated(Container))`
`;

const StyledRow = styled(Row)`
    flex-direction:column;
    align-items:flex-start;

    @media ${device.mobileL}{
        align-items:center;
    }
`;

const AnimatedH1 = styled(animated.h1)`
`;

const Home = () => {

    const h1Ani = useSpring({
        from: {opacity: 0, marginLeft: -100, marginRight: 100},
        to: {opacity: 1, marginLeft:0, marginRight: 0}
    });

    return (
        <Container justifyContent="center">
            <StyledRow>
                <AnimatedH1 style={h1Ani}>
                    Title placeHolder
                </AnimatedH1>
                <AnimatedTile>
                    <h2>yayy</h2>
                </AnimatedTile>
            </StyledRow>
        </Container>
    );
}

export default Home;