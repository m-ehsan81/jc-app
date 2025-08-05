import { InputHTMLAttributes } from "react";

export interface CustomInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isError?: boolean;
}
