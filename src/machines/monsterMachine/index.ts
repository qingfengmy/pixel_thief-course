import { assign, createMachine } from "xstate";
import { CoordsType } from "../../types";
import { MonsterContextType, MonsterStateType } from "./types";

const coordsList: CoordsType[] = [
    [8, 1],
    [8, 2],
];

export const monsterMachine = createMachine<
    MonsterContextType,
    any,
    MonsterStateType
>(
    {
        context: {
            coords: coordsList[0],
        },
        id: `monster`,
        initial: `up`,
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
