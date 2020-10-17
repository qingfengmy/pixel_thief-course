import { assign, createMachine } from "xstate";
import { log } from "xstate/lib/actions";
import { CoordsType } from "../../types";
import {
    MonsterContextType,
    MonsterEventsType,
    MonsterStateType,
} from "./types";

const coordsList: CoordsType[] = [
    [8, 1],
    [8, 2],
];

export const monsterMachine = createMachine<
    MonsterContextType,
    MonsterEventsType,
    MonsterStateType
>(
    {
        context: {
            coords: coordsList[0],
        },
        id: `monster`,
        initial: `up`,
        on: {
            PLAYER_MOVED: {
                actions: log(),
            },
        },
        states: {
            up: {
                after: {
                    2000: {
                        actions: `moveDown`,
                        target: `down`,
                    },
                },
            },
            down: {
                after: {
                    2000: {
                        actions: `moveUp`,
                        target: `up`,
                    },
                },
            },
        },
    },
    {
        actions: {
            moveDown: assign<MonsterContextType>(() => ({
                coords: coordsList[1],
            })) as any,
            moveUp: assign<MonsterContextType>(() => ({
                coords: coordsList[0],
            })) as any,
        },
    }
);
