import { getClassNames } from "@utils";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useThemeProvider } from "./useThemeProvider";

/**
 * React hook for getClassNames to memoize the result.
 */
export function useGetClassNames(
  classNames: Record<string, (props?: Record<string, unknown>) => string>,
  classNameOverrides: Record<string, string[]> = {},
  props: Record<string, unknown> = {}
) {
  const theme = useThemeProvider();
  const twMergeFn = theme?.twMerge || twMerge;

  return useMemo(
    () => getClassNames(classNames, classNameOverrides, props, twMergeFn),
    [classNames, classNameOverrides, props, twMergeFn]
  );
}