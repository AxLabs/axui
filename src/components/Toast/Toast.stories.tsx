import React, { useState } from "react";
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./Toast";

export default {
  title: "Components/Toast",
  component: Toast,
};

export const Default = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-[200px] p-10 bg-muted/20">
      <ToastProvider swipeDirection="right">
        <Toast open={open} onOpenChange={setOpen}>
          <div className="flex flex-col space-y-1">
            <ToastTitle>Toast Title</ToastTitle>
            <ToastDescription>This is the toast description.</ToastDescription>
          </div>
          <ToastAction altText="Undo">Undo</ToastAction>
        </Toast>
        <ToastViewport />
      </ToastProvider>
    </div>
  );
};
