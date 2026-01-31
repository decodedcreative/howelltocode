import { getClassNames } from "../utils";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useThemeProvider } from "./useThemeProvider";

/**
 * React hook for getClassNames to memoize the result.
 */
export function useGetClassNames(classNames, classNameOverrides = {}, props = {}) {
  const theme = useThemeProvider();
  const twMergeFn = theme?.twMerge || twMerge;

  return useMemo(
    () => getClassNames(classNames, classNameOverrides, props, twMergeFn),
    [classNames, classNameOverrides, props, twMergeFn]
  );
}