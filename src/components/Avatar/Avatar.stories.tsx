import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  subcomponents: { AvatarImage, AvatarFallback },
  argTypes: {
    children: { control: "text" },
    className: { control: "text" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Avatar {...args}>
    <AvatarImage src="https://www.example.com/avatar.jpg" />
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
);

export const Default = Template.bind({});
Default.args = {
  className: "bg-blue-500", // You can adjust this based on your theme
};

export const WithCustomFallback = Template.bind({});
WithCustomFallback.args = {
  className: "bg-green-500", // You can adjust this based on your theme
  children: (
    <>
      <AvatarImage src="https://www.example.com/avatar.jpg" />
      <AvatarFallback>NO IMAGE</AvatarFallback>
    </>
  ),
};
