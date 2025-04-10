import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <label className="flex items-center space-x-2">
        <Checkbox
          checked={checked}
          onCheckedChange={(value) => setChecked(!!value)}
          id="checkbox-default"
        />
        <span className="text-sm">Accept terms and conditions</span>
      </label>
    );
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);

    return (
      <label className="flex items-center space-x-2">
        <Checkbox
          checked={checked}
          onCheckedChange={(value) => setChecked(!!value)}
          id="checkbox-checked"
        />
        <span className="text-sm">You already accepted</span>
      </label>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <label className="flex items-center space-x-2 opacity-50 cursor-not-allowed">
      <Checkbox checked={true} disabled id="checkbox-disabled" />
      <span className="text-sm">This option is locked</span>
    </label>
  ),
};
