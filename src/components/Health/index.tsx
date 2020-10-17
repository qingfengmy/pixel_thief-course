import React from "react";
import styled from "styled-components";
import { Image, ImageSizeType } from "../Image";
import heartImg from "../../images/heart.png";
import { space } from "../../styles/space";

const Layout = styled.div`
    display: flex;

    > :not(:first-child) {
        margin-left: ${space(2)};
    }
`;

interface PropsType {
    health: number;
}

export const Health = ({ health }: PropsType) => (
    <Layout>
        {Array(health)
            .fill(undefined)
            .map((_, i) => (
                <Image
                    key={i}
                    src={heartImg}
                    alt="heart"
                    size={ImageSizeType.Small}
                />
            ))}
    </Layout>
);
