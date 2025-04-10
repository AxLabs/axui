import * as React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "./AlertDialog";
import { Button } from "../Button/Button";

export default {
  title: "Components/AlertDialog",
  component: AlertDialog,
  subcomponents: {
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
  },
  argTypes: {
    children: { control: "text" },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <AlertDialog {...args}>
    <AlertDialogTrigger asChild>
      <Button>Open Alert</Button>
    </AlertDialogTrigger>
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Alert Title</AlertDialogTitle>
          <AlertDialogDescription>
            This is a description for the alert dialog. It's a detailed message
            explaining the alert.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialog>
);

export const Default = Template.bind({});
Default.args = {};
