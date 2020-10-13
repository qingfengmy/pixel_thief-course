import { createMachine } from "xstate";
import { PLAYER_STARTING_COORDS } from "../../constants";
import { log } from "xstate/lib/actions";
import { PlayerContextType, PlayerEventType, PlayerStateType } from "./types";

export const playerMachine = createMachine<
    PlayerContextType,
    PlayerEventType,
    PlayerStateType
>({
    context: {
        coords: PLAYER_STARTING_COORDS,
    },
    id: `player`,
    initial: `alive`,
    states: {
        alive: {
            on: {
                ARROW_BUTTON_CLICKED: {
                    actions: log(),
                },
            },
        },
        dead: {},
    },
});
