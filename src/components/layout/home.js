import React from "react";
import styled from 'styled-components'
import { Container, Row, Column } from "../base";
import { device } from "../base/devices";
import { useSpring, animated, useChain, useTransition, useSpringRef, config } from "react-spring";
import Cards from '../sub/cards'


const Home = () => {
    return (
        <>
            <Cards />
        </>
    );
}

export default Home;