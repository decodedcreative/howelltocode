import { twMerge } from 'tailwind-merge';

/**
 * Merges default class names from CVA with any user-provided overrides.
 */
export const getClassNames = (
  classNames: Record<string, any>,
  classNameOverrides: Record<string, string[]> = {},
  props: Record<string, any> = {},
  twMergeFn = twMerge
) => {
  return Object.keys(classNames).reduce((acc, key) => {
    const baseClasses = classNames[key](props[key] || {});
    const overrideClasses = classNameOverrides[key] || [];
    acc[key] = twMergeFn(baseClasses, overrideClasses.join(' '));
    return acc;
  }, {} as Record<string, string>);
};
