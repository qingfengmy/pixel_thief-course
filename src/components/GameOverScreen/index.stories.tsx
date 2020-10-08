import React from "react";
import { GameOverScreen } from ".";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: `Menu Screens/GameOverScreen`,
} as Meta;

const mockFunction = () => {};

export const Index = () => <GameOverScreen onRestartButtonClick={mockFunction} />;
