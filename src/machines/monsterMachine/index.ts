import { createMachine } from "xstate";
import { MonsterContextType, MonsterStateType } from "./types";

export const monsterMachine = createMachine<
    MonsterContextType,
    any,
    MonsterStateType
>({
    context: {
        coords: [8, 1],
    },
    id: `monster`,
    initial: `active`,
    states: {
        active: {},
    },
});
