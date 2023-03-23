import { ButtonHTMLAttributes } from 'react';

export type ButtonElement = ButtonHTMLAttributes<HTMLButtonElement>;

export type Variant = 'primary' | 'secondary' | 'order' | 'orderBack';

export interface ButtonProps
  extends Omit<ButtonElement, 'aria-label' | 'disabled'> {
  variant?: Variant;
  text: string;
  icon?: React.ReactNode;
}

export type ButtonWrapperProps = Pick<ButtonProps, 'variant'>;
