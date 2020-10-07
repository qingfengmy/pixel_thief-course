import React from "react";
import { HomeScreen } from ".";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: `Menu Screens/HomeScreen`,
} as Meta;

const mockFunction = () => {};

export const Index = () => <HomeScreen onStartButtonClick={mockFunction} />;
