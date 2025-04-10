import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/Dialog";

import { Button } from "@/components/Button";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>This is a Dialog</DialogTitle>
          <DialogDescription>
            A modal built with Radix primitives and AxUI polish.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          Put whatever you want here: forms, warnings, NFTs, lore dumps, etc.
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button variant="default">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
