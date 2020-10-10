import React from "react";
import { gameMachine } from "../../machines/gameMachine";
import { useMachine } from "@xstate/react";
import { Button } from "../Button";
import { HomeScreen } from "../HomeScreen";
import { GameOverScreen } from "../GameOverScreen";
import { GameCompleteScreen } from "../GameCompleteScreen";

export const Game = () => {
  const [state, send] = useMachine(gameMachine);

  if (state.matches("home")) {
    return <HomeScreen onStartButtonClick={() => send("START_BUTTON_CLICKED")} />;
  }

  if (state.matches("playing")) {
    if (state.matches("playing.level1")) {
      return (
        <>
          <p>state: playing.level1</p>
          <Button onClick={() => send("PLAYER_DIED")}>PLAYER_DIED</Button>
          <Button onClick={() => send("PLAYER_WALKED_THROUGH_DOOR")}>PLAYER_WALKED_THROUGH_DOOR</Button>
        </>
      );
    }

    if (state.matches("playing.level2")) {
      return (
        <>
          <p>state: playing.level2</p>
          <Button onClick={() => send("PLAYER_DIED")}>PLAYER_DIED</Button>
          <Button onClick={() => send("PLAYER_WALKED_THROUGH_DOOR")}>PLAYER_WALKED_THROUGH_DOOR</Button>
        </>
      );
    }

    if (state.matches("playing.level3")) {
      return (
        <>
          <p>state: playing.level3</p>
          <Button onClick={() => send("PLAYER_DIED")}>PLAYER_DIED</Button>
          <Button onClick={() => send("PLAYER_GOT_TREASURE")}>PLAYER_GOT_TREASURE</Button>
        </>
      );
    }
  }

  if (state.matches("gameOver")) {
    return <GameOverScreen onRestartButtonClick={() => send("RESTART_BUTTON_CLICKED")} />;
  }

  if (state.matches("gameComplete")) {
    return <GameCompleteScreen onGoHomeButtonClick={() => send("HOME_BUTTON_CLICKED")} />;
  }

  throw Error(`Unknown game state: ${state.value}`);
};
