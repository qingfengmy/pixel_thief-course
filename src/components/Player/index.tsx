import React from "react";
import { useActor } from "@xstate/react";
// import { PlayerActorType } from "../../machines/playerMachine/types";
import thiefGif from "../../images/thief.gif";
import { Image } from "../Image";

interface PropsType {
    actor: any;
}

export const Player = ({ actor }: PropsType) => {
    const [state, send] = useActor(actor);

    return <Image src={thiefGif} alt="thief" />;
};
