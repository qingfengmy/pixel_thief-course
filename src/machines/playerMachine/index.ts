import { createMachine } from "xstate";
import { PLAYER_STARTING_COORDS } from "../../constants";
import { assign, choose, sendParent } from "xstate/lib/actions";
import { getTargetCoords } from "../../util/getTargetCoords";
import { isCoordsOnGrid } from "../../util/isCoordsOnGrid";
import { PlayerMovedType } from "../gameMachine/types";
import {
    ArrowButtonClickedType,
    PlayerContextType,
    PlayerEventType,
    PlayerStateType,
} from "./types";

export const playerMachine = createMachine<
    PlayerContextType,
    PlayerEventType,
    PlayerStateType
>(
    {
        context: {
            coords: PLAYER_STARTING_COORDS,
        },
        id: `player`,
        initial: `alive`,
        states: {
            alive: {
                on: {
                    ARROW_BUTTON_CLICKED: {
                        actions: `onArrowButtonClick`,
                    },
                    RESET_PLAYER_COORDS: {
                        actions: `resetCoords`,
                    },
                },
            },
            dead: {},
        },
    },
    {
        actions: {
            onArrowButtonClick: choose([
                {
                    cond: `isSquareAvailable`,
                    actions: [`move`, `broadcastPlayerMoved`],
                },
            ]),
            resetCoords: assign<PlayerContextType>(() => ({
                coords: PLAYER_STARTING_COORDS,
            })) as any,
            broadcastPlayerMoved: sendParent((context) => {
                const { coords } = context;
                const event: PlayerMovedType = {
                    type: "PLAYER_MOVED",
                    coords,
                };

                return event;
            }),
            move: assign<PlayerContextType, ArrowButtonClickedType>(
                (context, event) => {
                    const { coords } = context;
                    const { direction } = event;
                    const targetCoords = getTargetCoords({ coords, direction });

                    return {
                        coords: targetCoords,
                    };
                }
            ) as any,
        },
        guards: {
            isSquareAvailable: (
                context: PlayerContextType,
                event: PlayerEventType
            ) => {
                if (event.type === "ARROW_BUTTON_CLICKED") {
                    const { coords } = context;
                    const { direction } = event;
                    const targetCoords = getTargetCoords({ coords, direction });

                    return isCoordsOnGrid(targetCoords);
                }

                return false;
            },
        },
    }
);
