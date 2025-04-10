import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";
import {
  AccordionSingleProps,
  AccordionMultipleProps,
} from "@radix-ui/react-accordion";
import { JSX } from "react/jsx-dev-runtime";

export default {
  title: "Components/Accordion",
  component: Accordion,
  subcomponents: { AccordionItem, AccordionTrigger, AccordionContent },
  argTypes: {
    children: { control: "text" },
    type: {
      control: {
        type: "radio",
        options: ["single", "multiple"],
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Accordion type={args.type} {...args}>
    <AccordionItem value="item-1">
      <AccordionTrigger>Accordion Item 1</AccordionTrigger>
      <AccordionContent>
        This is the content of the first item.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Accordion Item 2</AccordionTrigger>
      <AccordionContent>
        This is the content of the second item.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Accordion Item 3</AccordionTrigger>
      <AccordionContent>
        This is the content of the third item.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {
  type: "single", // Ensure the 'type' prop is set here
};

export const Multiple = Template.bind({});
Multiple.args = {
  type: "multiple", // Set type to multiple here
};

export const Controlled = (
  args: JSX.IntrinsicAttributes &
    ((AccordionSingleProps | AccordionMultipleProps) &
      React.RefAttributes<HTMLDivElement>)
) => {
  const [openIndex, setOpenIndex] = React.useState<string | undefined>();

  const handleItemChange = (index: string | undefined) => {
    setOpenIndex(index);
  };

  return (
    <Accordion value={openIndex} onValueChange={handleItemChange} {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Accordion Item 1</AccordionTrigger>
        <AccordionContent>
          This is the content of the first item.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Accordion Item 2</AccordionTrigger>
        <AccordionContent>
          This is the content of the second item.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Accordion Item 3</AccordionTrigger>
        <AccordionContent>
          This is the content of the third item.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

Controlled.args = {
  type: "single", // Set the default type for controlled
};
