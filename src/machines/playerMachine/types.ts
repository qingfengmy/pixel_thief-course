import { Actor } from "xstate";
import { CoordsType, DirectionType } from "../../types";

export interface PlayerContextType {
    coords: CoordsType;
}

export type PlayerStateType = {
    context: PlayerContextType;
    value: `alive` | `dead`;
};

export type ArrowButtonClickedType = {
    direction: DirectionType;
    type: "ARROW_BUTTON_CLICKED";
};

export type PlayerEventType = ArrowButtonClickedType;

export type PlayerActorType = Actor<PlayerContextType, PlayerEventType>;
