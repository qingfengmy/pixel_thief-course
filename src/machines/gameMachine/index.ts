import { createMachine } from "xstate";
import { GameEventType, GameStateType } from "./types";
import { playerMachine } from "../playerMachine";

export const gameMachine = createMachine<null, GameEventType, GameStateType>(
    {
        id: `game`,
        initial: `home`,
        states: {
            home: {
                on: {
                    START_BUTTON_CLICKED: "playing",
                },
            },
            playing: {
                invoke: {
                    id: `playerActor`,
                    src: `playerMachine`,
                },
                on: {
                    PLAYER_DIED: "gameOver",
                    PLAYER_GOT_TREASURE: "gameComplete",
                },
                initial: `level1`,
                states: {
                    level1: {
                        on: {
                            PLAYER_WALKED_THROUGH_DOOR: "level2",
                        },
                    },
                    level2: {
                        on: {
                            PLAYER_WALKED_THROUGH_DOOR: "level3",
                        },
                    },
                    level3: {},
                },
            },
            gameOver: {
                on: {
                    RESTART_BUTTON_CLICKED: "playing",
                },
            },
            gameComplete: {
                on: {
                    HOME_BUTTON_CLICKED: "home",
                },
            },
        },
    },
    {
        services: {
            playerMachine,
        },
    }
);
