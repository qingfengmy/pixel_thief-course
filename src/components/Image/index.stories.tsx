import React from "react";
import { Image, ImageSizeType } from ".";
import { Meta } from "@storybook/react/types-6-0";
import { space } from "../../styles/space";
import thiefGif from "../../images/thief.gif";
import styled from "styled-components";

export default {
    title: `Small Components/Image`,
} as Meta;

const Layout = styled.div`
    display: flex;

    > *:not(:first-child) {
        margin-left: ${space(4)};
    }
`;

export const Index = () => (
    <Layout>
        <Image src={thiefGif} alt="thief" size={ImageSizeType.Large} />
        <Image src={thiefGif} alt="thief" />
        <Image src={thiefGif} alt="thief" size={ImageSizeType.Small} />
    </Layout>
);
