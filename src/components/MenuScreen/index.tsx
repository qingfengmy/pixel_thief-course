import styled from "styled-components";
import { space } from "../../styles/space";

export const MenuScreen = styled.section`
    width: 100%;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > *:not(:first-child) {
        margin-top: ${space(8)};
    }
`;
