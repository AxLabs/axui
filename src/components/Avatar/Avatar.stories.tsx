import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "./Avatar";

type Props = {
  src?: string;
  fallback: string;
  size?: "sm" | "md" | "lg";
};

const meta: Meta<Props> = {
  title: "Components/Avatar",
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "Image source URL for the avatar",
    },
    fallback: {
      control: "text",
      description: "Fallback initials or content",
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Avatar size",
    },
  },
  args: {
    src: "https://i.pravatar.cc/150?u=user@example.com",
    fallback: "DM",
    size: "md",
  },
};

export default meta;
type Story = StoryObj<Props>;

const getSizeClass = (size: Props["size"]) => {
  switch (size) {
    case "sm":
      return "h-8 w-8";
    case "lg":
      return "h-16 w-16";
    case "md":
    default:
      return "h-10 w-10";
  }
};

export const Default: Story = {
  render: ({ src, fallback, size }) => (
    <Avatar className={getSizeClass(size)}>
      <AvatarImage src={src} alt="Avatar" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  ),
};
