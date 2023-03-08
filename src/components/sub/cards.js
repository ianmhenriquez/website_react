import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { Container, Row, Column } from "../base";
import { device } from "../base/devices";
import { useSpring, animated, useChain, useTransition, useSpringRef, config } from "react-spring";
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AnimatedTile = styled(animated(Container))`
    background-color:#E6E6E6;
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
    cursor:pointer;
`;

const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`;



const Cards = () => {
    const { ref, inView } = useInView()
    const navigate = useNavigate();
    const HandleClick = () => {
        navigate('/projects');
    }
    const fromTop = useSpring({
        from: { opacity: 0, marginBottom: 100, marginTop: -100 },
        to: { opacity: inView ? 1 : 0, marginBottom: inView ? 0 : 100, marginTop: inView ? 20 : -100 }
    });
    //get data from api
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://bored-beret-hen.cyclic.app/api/projects',
            );
            setData(result.data);
        };
        fetchData();
    }, []);



    return (
        <Container justifyContent="center" ref={ref} >
            <StyledRow>
                {data.map((item, index) => (
                    <StyledTilt key={item._id}>
                        <div onClick={HandleClick}>
                            <Card direction="column" width="45%">
                                <AnimatedH1 style={fromTop}>
                                    {item.title}
                                </AnimatedH1>
                                <AnimatedTile style={fromTop}>
                                    <Row direction="direction">
                                        <Column>
                                            <Image src={item.image} />
                                        </Column>
                                        <Column>
                                            <p>
                                                {item.shortDescription}
                                            </p>
                                        </Column>
                                    </Row>
                                </AnimatedTile>
                            </Card>
                        </div>
                    </StyledTilt>
                ))}
            </StyledRow>
        </Container>
    )
}
export default Cards;