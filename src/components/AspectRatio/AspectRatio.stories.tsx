import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { AspectRatio } from "./AspectRatio"; // Path to your AspectRatio component

export default {
  title: "Components/AspectRatio",
  component: AspectRatio,
  argTypes: {
    ratio: { control: "number", description: "Aspect ratio (width/height)" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AspectRatio {...args}>
    <div style={{ backgroundColor: "#eee" }}>
      <p>Your content here</p>
    </div>
  </AspectRatio>
);

export const Default = Template.bind({});
Default.args = {
  ratio: 16 / 9, // Default aspect ratio of 16:9
};

export const Square = Template.bind({});
Square.args = {
  ratio: 1, // Square aspect ratio (1:1)
};

export const Custom = Template.bind({});
Custom.args = {
  ratio: 4 / 3, // Custom aspect ratio (4:3)
};
