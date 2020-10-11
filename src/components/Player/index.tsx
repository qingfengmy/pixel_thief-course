import React from "react";
import { useActor } from "@xstate/react";
// import { PlayerActorType } from "../../machines/playerMachine/types";
import thiefGif from "../../images/thief.gif";
import { Image } from "../Image";
import styled from "styled-components";
import { coordsToPosition } from "../../util/coordsToPosition";

const Layout = styled.div`
    position: absolute;
`;

interface PropsType {
    actor: any;
}

export const Player = ({ actor }: PropsType) => {
    const [state, send] = useActor(actor);
    const { coords } = state.context;
    const position = coordsToPosition(coords);

    return (
        <Layout style={{ top: position[1], left: position[0] }}>
            <Image src={thiefGif} alt="thief" />
        </Layout>
    );
};
