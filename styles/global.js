import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @font-face {
        font-family: 'MoonTime';
        src: url('./fonts/MoonTime-Regular.eot');
        src: url('./fonts/MoonTime-Regular.eot?#iefix') format('embedded-opentype'),
            url('./fonts/MoonTime-Regular.woff2') format('woff2'),
            url('./fonts/MoonTime-Regular.woff') format('woff'),
            url('./fonts/MoonTime-Regular.ttf') format('truetype'),
            url('./fonts/MoonTime-Regular.svg#MoonTime-Regular') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    
    *,
    *:after,
    *:before {
        box-sizing:border-box;
    }
    html { scroll-behavior: smooth; }
    body {
        margin:0;
        padding:0;
        font-family: ${props => props.theme.fonts.paragraphFont};
        color: ${props => props.theme.colors.defaultPrimary};
        background-color: ${props => props.theme.colors.defaultSecondary};
        font-size: ${props => props.theme.fontSizes.small};
        font-weight: ${props => props.theme.fontWeight.regular};
        font-display:fallback;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${props => props.theme.fonts.headingFont};
        font-weight:normal;
        font-display:fallback;
        margin-top:0;
        margin-bottom:${props => props.theme.spacing.inset};
    }
    p, 
    ul > li {
        margin-top:0;
        margin-bottom:0;
    }
`;