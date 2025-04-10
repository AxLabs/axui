import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";

export default {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  subcomponents: { ToggleGroupItem },
  argTypes: {
    variant: {
      control: { type: "select", options: ["default", "outline"] },
      defaultValue: "default",
    },
    size: {
      control: { type: "select", options: ["default", "sm", "lg"] },
      defaultValue: "default",
    },
  },
} as Meta;

const Template: StoryFn<any> = (args) => (
  <ToggleGroup {...args}>
    <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
    <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
    <ToggleGroupItem value="item3">Item 3</ToggleGroupItem>
  </ToggleGroup>
);

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  size: "default",
  type: "single",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  size: "default",
  type: "single",
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  variant: "default",
  size: "sm",
  type: "single",
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  variant: "default",
  size: "lg",
  type: "single",
};
