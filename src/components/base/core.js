import React from "react";
import styled, { css } from 'styled-components'
import { device } from "./devices";

export const Container = styled.div`
    display:flex;
    flex-direction:${props => props.theme.direction[props.direction]};
    justify-content:${props => props.theme.justifyContent[props.justifyContent]};
    flex-wrap:${props => props.flexWrap};
    align-items:${props => props.theme.alignItems[props.alignItems]};
    background-color:${props => props.theme.colors[props.bgColor]};
    padding-top: ${props => props.spacing ? props => props.theme.spacing[props.spacing] : ''};
    padding-bottom: ${props => props.spacing ? props => props.theme.spacing[props.spacing] : ''};
`;

export const Row = styled.div`
    max-width:1280px;
    width:100%;
    display:flex;
    flex-wrap:wrap;
    flex:1;
    align-items:${props => props.theme.alignItems.center};
    justify-content:${props => props.justifyContent};

    @media ${device.laptop} { 
        max-width: calc(100vw - 30px);
    }
    @media ${device.mobileL} { 
        flex-direction:column;
        max-width:calc( 100vw );
    }
`;

// AUTO-LAYOUT COLUMNS
export const Column = styled.div`
    display:flex;
    flex-direction:${props => props.theme.direction[props.direction]};
    align-items:${props => props.theme.alignItems[props.alignItems]};
    justify-content:${props => props.theme.justifyContent[props.justifyContent]};
    position:${props => props.theme.position.relative};
    padding-left:${props => props.theme.spacing.inset};
    padding-right:${props => props.theme.spacing.inset};
    width: ${props => props.width ? [props.width] : '100%'};
    max-width: ${props => props.width ? [props.width] : '100%'};

    @media ${device.laptop} {
        flex-direction:${props => props.theme.direction.column};
        width:100%;
        max-width:calc( 100% - 60px );
        justify-content:${props => props.theme.justifyContent.center};
        align-items:${props => props.theme.alignItems.center};
        padding-left:0;
        padding-right:0;
        margin:0 auto;
    }
`;