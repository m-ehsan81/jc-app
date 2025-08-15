import { ButtonHTMLAttributes, ReactNode } from "react";

export interface CustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
