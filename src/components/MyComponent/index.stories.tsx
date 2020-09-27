import React from "react";
import { MyComponent } from ".";
import { Meta } from "@storybook/react/types-6-0";

export default {
  title: `MyComponent`,
} as Meta;

export const Index = () => <MyComponent />;
