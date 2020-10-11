import { createMachine } from "xstate";
import { PLAYER_STARTING_COORDS } from "../../constants";
import { PlayerContextType, PlayerStateType } from "./types";

export const playerMachine = createMachine<
    PlayerContextType,
    any,
    PlayerStateType
>({
    context: {
        coords: PLAYER_STARTING_COORDS,
    },
    id: `player`,
    initial: `alive`,
    states: {
        alive: {},
        dead: {},
    },
});
