import React from "react";
import styled from "styled-components";
import { Image } from "../Image";
import monsterGif from "../../images/monster.gif";
import { MonsterActorType } from "../../machines/monsterMachine/types";
import { useActor } from "@xstate/react";
import { coordsToPosition } from "../../util/coordsToPosition";

const Layout = styled.div`
    position: absolute;
`;

interface PropsType {
    actor: MonsterActorType;
}

export const Monster = ({ actor }: PropsType) => {
    // At time of writing, there is a bug with useActor type
    // @ts-ignore
    const [state] = useActor(actor);
    const { coords } = state.context;
    const position = coordsToPosition(coords);

    return (
        <Layout style={{ top: position[1], left: position[0] }}>
            <Image src={monsterGif} alt="treasure" />
        </Layout>
    );
};
