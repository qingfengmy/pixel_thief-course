import { GlobalStyles } from "../src/styles/GlobalStyles";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "fullscreen",
};

export const decorators = [
    (Story) => (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Story />
        </ThemeProvider>
    ),
];
