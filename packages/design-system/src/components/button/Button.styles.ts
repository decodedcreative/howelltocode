import { cva } from "class-variance-authority";

export const buttonStyles = {
  component: cva(
    [
      "inline-flex items-center justify-center font-medium border transition-colors",
      "focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
    ],
    {
      variants: {
        variant: {
          primary:
            "bg-brand-primary text-white hover:bg-brand-primary-hover border-transparent",
          secondary:
            "bg-background-muted text-text-primary hover:bg-background-alt border-transparent",
          outline:
            "bg-transparent text-brand-primary border-border-strong hover:bg-background-alt",
        },
        size: {
          sm: "px-3 py-1.5 text-sm rounded-default",
          md: "px-4 py-2 text-base rounded-default",
          lg: "px-6 py-3 text-lg rounded-md",
        },
      },
      defaultVariants: {
        variant: "primary",
        size: "md",
      },
    }
  ),
};
