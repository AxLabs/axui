import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "./Alert";
import { Terminal } from "lucide-react";

export default {
  title: "Components/Alert",
  component: Alert,
  subcomponents: { AlertTitle, AlertDescription },
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["default", "destructive"],
      },
    },
    children: { control: "text" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Alert {...args}>
    <Terminal className="h-4 w-4" />
    <AlertTitle>Alert Title</AlertTitle>
    <AlertDescription>
      This is an alert message. It can be used to display important messages to
      users.
    </AlertDescription>
  </Alert>
);

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  children: "This is a default alert",
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: "destructive",
  children: "This is a destructive alert",
};
