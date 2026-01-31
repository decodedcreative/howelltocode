import * as React from "react";
import { useGetClassNames } from "../../hooks";
import { textStyles } from "./Text.styles";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span";
  children: React.ReactNode;
  classNameOverrides?: Record<string, string[]>;
  muted?: boolean;
  size?: "xs" | "sm" | "base" | "lg";
  weight?: "normal" | "medium" | "semibold" | "bold";
}

export function Text({
  as: Component = "p",
  size = "base",
  weight = "normal",
  muted = false,
  classNameOverrides,
  children,
  ...props
}: TextProps) {
  const classNames = useGetClassNames(
    textStyles,
    classNameOverrides,
    { component: { size, weight, muted } }
  );

  return (
    <Component className={classNames.component} {...props}>
      {children}
    </Component>
  );
}
