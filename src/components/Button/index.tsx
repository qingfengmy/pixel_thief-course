import styled from "styled-components";
import { space } from "../../styles/space";

export const Button = styled.button`
    padding: ${space(3)} ${space(6)};
    border: 2px solid ${(props) => props.theme.color.white};

    text-transform: uppercase;
    letter-spacing: 0.1em;
`;
