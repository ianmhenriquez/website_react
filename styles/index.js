import React from 'react';
import { ThemeProvider } from 'styled-components';

const Theme = ({ children }) => {
    const theme = {
        colors: {
            defaultPrimary: "#000000", // black
            defaultSecondary: "#FFFFFF", // white
            defaultTertiary: "#999999", // lightgrey
            primary: "#F1ECE9", // beige
            secondary: "#CF9685", // light peach
            tertiary: "#9F543D", // dark peach
            quaternary: "#030200", // blackish
        },
        fonts: {
            paragraphFont: "Unna",
            headingFont: 'MoonTime',
        },
        fontWeight: {
            thin: "100",
            extraLight: "200",
            light: "300",
            regular: "400",
            medium: "500",
            semiBold: "600",
            bold: "700",
        },
        fontSizes: {
            extraSmall: "16px",
            small: "18px",
            extraMedium: "30px",
            medium: "50px",
            large: "60px",
            extraLarge: "90px",
            paragraph: "18px"
        },
        spacing: {
            inset: "15px",
            doubleInset: "30px",
            tripleInset: "60px",
            quarterlyInset: "90px",
            megaInset: "120px",
            none: "0px",
        },
        textAlign: {
            center: "center",
            left: "left",
            right: "right",
            justify: "justify"
        },
        direction: {
            column: "column",
            row: "row",
            columnReverse: "column-reverse",
            rowReverse: "row-reverse"
        },
        alignItems: {
            start: "flex-start",
            center: "center",
            end: "flex-end",
            spaceBetween: "space-between",
            strech: "strech"
        },
        justifyContent: {
            start: "flex-start",
            center: "center",
            end: "flex-end",
            spaceBetween: "space-between",
            spaceAround: "space-around",
            spaceEvenly: "space-evenly"
        },
        position: {
            relative: "relative",
            fixed: "fixed",
            sticky: "sticky",
            absolute: "absolute"
        },
        transition: {
            linear: "all 0.2s linear",
            easeIn: "all 0.2s ease-in",
            easeInOut: "all 0.2s ease-in-out",
        },
    }
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}
export default Theme;