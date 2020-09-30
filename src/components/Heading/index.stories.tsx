import React from "react";
import { Heading } from ".";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: `Small Components/Heading`,
} as Meta;

export const Index = () => <Heading>Game Over</Heading>;
