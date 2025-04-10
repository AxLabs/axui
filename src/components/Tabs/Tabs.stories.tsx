import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/Tabs";

const meta: Meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Tabs defaultValue="account">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p className="mt-4 text-sm text-muted-foreground">
            Change your account settings here.
          </p>
        </TabsContent>
        <TabsContent value="password">
          <p className="mt-4 text-sm text-muted-foreground">
            Update your password here.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  ),
};
