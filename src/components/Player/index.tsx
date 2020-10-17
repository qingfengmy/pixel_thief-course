import React from "react";
import { useActor } from "@xstate/react";
import thiefGif from "../../images/thief.gif";
import {
    ArrowButtonClickedType,
    // PlayerActorType,
} from "../../machines/playerMachine/types";
import { Image } from "../Image";
import styled from "styled-components";
import { coordsToPosition } from "../../util/coordsToPosition";
import { usePlayerControls } from "../../hooks/usePlayerControls";
import { DirectionType } from "../../types";
import { Health } from "../Health";
import { space } from "../../styles/space";

const HealthLayout = styled.div`
    position: absolute;
    top: -${space(30)};
    left: -${space(2)};

    display: flex;
`;

const ImageLayout = styled.div`
    position: absolute;

    display: flex;
`;

interface PropsType {
    actor: any;
}

export const Player = ({ actor }: PropsType) => {
    const [state, send] = useActor(actor);
    const { coords, health } = state.context;
    const position = coordsToPosition(coords);

    usePlayerControls({
        handleArrowUp: () =>
            send({
                type: "ARROW_BUTTON_CLICKED",
                direction: DirectionType.Up,
            } as ArrowButtonClickedType),
        handleArrowDown: () =>
            send({
                type: "ARROW_BUTTON_CLICKED",
                direction: DirectionType.Down,
            } as ArrowButtonClickedType),
        handleArrowLeft: () =>
            send({
                type: "ARROW_BUTTON_CLICKED",
                direction: DirectionType.Left,
            } as ArrowButtonClickedType),
        handleArrowRight: () =>
            send({
                type: "ARROW_BUTTON_CLICKED",
                direction: DirectionType.Right,
            } as ArrowButtonClickedType),
    });

    return (
        <>
            <HealthLayout>
                <Health health={health} />
            </HealthLayout>
            <ImageLayout style={{ top: position[1], left: position[0] }}>
                <Image src={thiefGif} alt="thief" />
            </ImageLayout>
        </>
    );
};
