import { Actor } from "xstate";
import { CoordsType } from "../../types";

export interface PlayerContextType {
    coords: CoordsType;
}

export type PlayerStateType = {
    context: PlayerContextType;
    value: `alive` | `dead`;
};

export type PlayerActorType = Actor<PlayerContextType>;
