import React from "react";
import { Image } from "../Image";
import styled from "styled-components";
import { coordsToPosition } from "../../util/coordsToPosition";
import { TREASURE_COORDS } from "../../constants";
import treasurePng from "../../images/treasure.png";

const Layout = styled.div`
    position: absolute;
`;

export const Treasure = () => {
    const position = coordsToPosition(TREASURE_COORDS);

    return (
        <Layout style={{ top: position[1], left: position[0] }}>
            <Image src={treasurePng} alt="Treasure chest" />
        </Layout>
    );
};
