import React, { useEffect } from "react";
import { gameMachine } from "../../machines/gameMachine";
import { useMachine } from "@xstate/react";
import { HomeScreen } from "../HomeScreen";
import { GameOverScreen } from "../GameOverScreen";
import { GameCompleteScreen } from "../GameCompleteScreen";
import { GameEventType } from "../../machines/gameMachine/types";
import level1BackgroundPng from "../../images/level1Background.png";
import level2BackgroundPng from "../../images/level2Background.png";
import level3BackgroundPng from "../../images/level3Background.png";
import { LevelBackgroundImage } from "../LevelBackgroundImage";
import { Grid } from "../Grid";
import { Player } from "../Player";

interface PropsType {
    fastForwardEvents?: GameEventType[];
}

export const Game = ({ fastForwardEvents }: PropsType) => {
    const [state, send] = useMachine(gameMachine);
    const { playerActor } = state.children;

    useEffect(() => {
        // note: batching events doesn't work at time of writing
        if (fastForwardEvents) {
            fastForwardEvents.forEach((event: GameEventType) => {
                send(event);
            });
        }
    }, [fastForwardEvents, send]);

    if (state.matches("home")) {
        return (
            <HomeScreen
                onStartButtonClick={() => send("START_BUTTON_CLICKED")}
            />
        );
    }

    if (state.matches("playing")) {
        if (state.matches("playing.level1")) {
            return (
                <>
                    <LevelBackgroundImage
                        src={level1BackgroundPng}
                        alt="Dungeon room"
                    />
                    <Grid>{playerActor && <Player actor={playerActor} />}</Grid>
                </>
            );
        }

        if (state.matches("playing.level2")) {
            return (
                <>
                    <LevelBackgroundImage
                        src={level2BackgroundPng}
                        alt="Dungeon room"
                    />
                    <Grid>{playerActor && <Player actor={playerActor} />}</Grid>
                </>
            );
        }

        if (state.matches("playing.level3")) {
            return (
                <>
                    <LevelBackgroundImage
                        src={level3BackgroundPng}
                        alt="Dungeon room"
                    />
                    <Grid>{playerActor && <Player actor={playerActor} />}</Grid>
                </>
            );
        }
    }

    if (state.matches("gameOver")) {
        return (
            <GameOverScreen
                onRestartButtonClick={() => send("RESTART_BUTTON_CLICKED")}
            />
        );
    }

    if (state.matches("gameComplete")) {
        return (
            <GameCompleteScreen
                onGoHomeButtonClick={() => send("HOME_BUTTON_CLICKED")}
            />
        );
    }

    throw Error(`Unknown game state: ${state.value}`);
};
