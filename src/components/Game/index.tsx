import React from "react";
import { gameMachine } from "../../machines/gameMachine";
import { useMachine } from "@xstate/react";
import { Button } from "../Button";

export const Game = () => {
  const [state, send] = useMachine(gameMachine);

  if (state.matches("home")) {
    return (
      <>
        <p>state: home</p>
        <Button onClick={() => send("START_BUTTON_CLICKED")}>START_BUTTON_CLICKED</Button>
      </>
    );
  }

  if (state.matches("playing")) {
    return (
      <>
        <p>state: playing</p>
        <Button onClick={() => send("PLAYER_DIED")}>PLAYER_DIED</Button>
        <Button onClick={() => send("PLAYER_GOT_TREASURE")}>PLAYER_GOT_TREASURE</Button>
      </>
    );
  }

  if (state.matches("gameOver")) {
    return (
      <>
        <p>state: gameOver</p>
        <Button onClick={() => send("RESTART_BUTTON_CLICKED")}>RESTART_BUTTON_CLICKED</Button>
      </>
    );
  }

  if (state.matches("gameComplete")) {
    return (
      <>
        <p>state: gameComplete</p>
        <Button onClick={() => send("HOME_BUTTON_CLICKED")}>HOME_BUTTON_CLICKED</Button>
      </>
    );
  }

  throw Error(`Unknown game state: ${state.value}`);
};
