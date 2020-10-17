import { Actor, Interpreter } from "xstate";
import { CoordsType } from "../../types";

export interface MonsterContextType {
    coords: CoordsType;
}

export type MonsterStateType = {
    context: MonsterContextType;
    value: `up` | `down`;
};

export type MonsterActorType =
    | Actor<MonsterContextType>
    | Interpreter<MonsterContextType>;
