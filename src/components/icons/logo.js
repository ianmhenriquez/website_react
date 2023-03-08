import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width: 40px;
    width: 40px;
    max-width: 40px;
    height: 40px;
    min-height: 40px;
    max-height: 40px;
`;

const SVG = styled.svg`
    width: 100%;
    height: 100%;
    color:${props => props.theme.colors[props.fontColor]};
    transition: all 0.3s ease-in-out;
    &:hover{
        color: ${({ theme }) => theme.colors.defaultPrimary};
    }
    //if root is the active link, change the color to the tertiary color
    &.active {
        color: ${({ theme }) => theme.colors.tertiary};
    }
`;



const LogoIcon = ({ iconColor = 'defaultPrimary' }) => (
    <Container>
        <SVG fontColor={iconColor} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path fill="currentColor" d="M100 40L100 460L200 460L200 300L320 300L320 460L420 460L420 40L320 40L320 200L200 200L200 40L100 40ZM256.938 210.562C262.904 210.56 270.579 211.543 278 213.25C289.831 215.971 299.008 219.841 303.75 225.531C305.502 227.633 306.736 230.062 307.625 232.688C308.681 234.076 309.612 235.594 310.375 237.375C312.042 241.265 311.932 245.051 310.875 249.531C310.628 250.576 310.354 251.567 309.969 252.844C309.91 253.04 309.474 254.385 309.375 254.719C309.266 255.087 309.213 255.28 309.156 255.5C310.821 256.972 312.167 258.847 312.562 261.281C312.901 263.362 312.637 265.003 312.094 266.844C311.547 268.696 310.591 270.82 309.625 272.312C306.793 276.69 303.499 280.182 299.406 282.812C293.437 286.65 288.014 288.172 282.25 287.906C267.789 294.475 249.924 294.557 236.531 287.156C228.699 284.828 222.204 281.081 219.25 275.594C218.646 274.472 218.337 273.366 217.844 272.25C215.242 268.932 213.562 265.124 213.25 260.75C213.093 258.547 213.24 256.676 213.531 253.781C213.532 253.664 213.531 253.453 213.531 253.344C213.531 253.259 213.561 253.094 213.562 253C213.575 252.084 213.625 250.843 213.719 249.625C213.734 249.431 213.735 249.328 213.75 249.156C213.028 247.246 212.819 245.192 213.125 243.156C213.441 241.056 214.217 239.146 215.344 237.188C216.816 234.627 218.992 231.88 221.719 228.938C226.051 224.263 231.851 219.112 234.562 217.562C241.157 213.794 245.87 211.769 251.625 210.906C253.167 210.675 254.949 210.563 256.938 210.562Z" />
        </SVG>
    </Container>
);
export default LogoIcon;