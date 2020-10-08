import React from "react";
import { GameCompleteScreen } from ".";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: `Menu Screens/GameCompleteScreen`,
} as Meta;

const mockFunction = () => {};

export const Index = () => <GameCompleteScreen onGoHomeButtonClick={mockFunction} />;
