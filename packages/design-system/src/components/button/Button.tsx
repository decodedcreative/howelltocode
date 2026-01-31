import * as React from 'react';
import { useGetClassNames } from '../../hooks';
import { buttonStyles } from './Button.styles';

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  children: React.ReactNode;
  classNameOverrides?: Record<string, string[]>;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
};

export function Button({
  variant = 'primary',
  size = 'md',
  classNameOverrides,
  children,
  ...props
}: ButtonProps) {
  const classNames = useGetClassNames(buttonStyles, classNameOverrides, {
    component: { variant, size },
  });

  return (
    <button type='button' className={classNames.component} {...props}>
      {children}
    </button>
  );
}
