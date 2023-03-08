import React from 'react';
import styled from 'styled-components';
import { Container } from '../base';
import { device } from '../base/devices';

const StyledContainer = styled(Container)`
    min-width: 40px;
    width: 40px;
    max-width: 40px;
    height: 40px;
    min-height: 40px;
    max-height: 40px;
    user-select: none;

    @media ${device.mobileL}{
        display:block;
    }
    
`;

const SVG = styled.svg`
    width: 100%;
    height: 100%;
    color:${props => props.theme.colors[props.iconColor]};
    transition: all 0.3s ease-in-out;
    &:hover{
        color:${props => props.theme.colors.defaultPrimary};
    }


    

`;

const HamburgerIcon = ({ className, id, isOpen, iconColor="defaultSecondary" }) => (
    <StyledContainer className={className} id={id} isOpen={isOpen}>
        <SVG iconColor={iconColor} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></SVG>
    </StyledContainer>
);

export default HamburgerIcon;