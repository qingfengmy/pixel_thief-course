import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            black: string;
            focus: string;
            white: string;
        };
        fontFamily: string;
        fontSize: string[];
        spacePx: number;
    }
}
