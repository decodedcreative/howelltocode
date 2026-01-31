import * as React from "react";
import { useGetClassNames } from "@hooks";
import { textStyles } from "./Text.styles";

export type TextProps = Omit<
  React.HTMLAttributes<HTMLParagraphElement>,
  "children"
> & {
  as?: "p" | "span";
  children: React.ReactNode;
  classNameOverrides?: Record<string, string[]>;
  muted?: boolean;
  size?: "xs" | "sm" | "base" | "lg";
  weight?: "normal" | "medium" | "semibold" | "bold";
};

export const Text = ({
  as: Component = "p",
  size = "base",
  weight = "normal",
  muted = false,
  classNameOverrides = undefined,
  children,
  ...props
}: TextProps) => {
  const classNames = useGetClassNames(
    textStyles,
    classNameOverrides ?? {},
    { component: { size, weight, muted } }
  );

  return (
    <Component className={classNames.component} {...props}>
      {children}
    </Component>
  );
}

Text.displayName = 'DS_Text';