import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../utils/client";

export enum ButtonStyleTypes {
  MAIN = "px-6 py-3 border-[1px] w-fit border-[#E2E4E5] rounded-md max-phoneM:self-center",
  SECONDARY = "flex px-6 py-3 border-[1px] w-fit border-[#E2E4E5] rounded-md max-phoneM:self-center",
  NONE = "",
}

export type ButtonProps = {
  children: ReactNode;
  styleType?: ButtonStyleTypes;
  className?: string;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, styleType, className, ...props }, ref) => (
    <button className={cn(className, styleType)} ref={ref} {...props}>
      {children}
    </button>
  ),
);
