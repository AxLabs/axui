import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    type: "single",
    collapsible: true,
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args} className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is AxUI?</AccordionTrigger>
        <AccordionContent>
          AxUI is a headless, accessible, and customizable design system built
          with Radix UI and Tailwind CSS.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Is it production-ready?</AccordionTrigger>
        <AccordionContent>
          Absolutely. It’s built on top of Radix Primitives and tested with
          React Testing Library.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Can I extend components?</AccordionTrigger>
        <AccordionContent>
          You bet. Every component is fully typed, headless, and composable. Go
          nuts.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
