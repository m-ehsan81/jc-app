import { ButtonHTMLAttributes, ReactNode } from "react";

export interface CustomIconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  icon: ReactNode;
}
