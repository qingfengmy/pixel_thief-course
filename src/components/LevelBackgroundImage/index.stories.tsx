import React from "react";
import { LevelBackgroundImage } from ".";
import { Meta } from "@storybook/react/types-6-0";
import level1BackgroundPng from "../../images/level1Background.png";

export default {
  title: `Small Components/LevelBackgroundImage`,
} as Meta;

export const Index = () => <LevelBackgroundImage src={level1BackgroundPng} alt="A dungeon room" />;
