import clsx from "clsx";
import { CustomInputProps } from "./type";

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { label, id, isError, helperText, className, ...rest } = props;

  const baseClasses =
    "border border-white w-full h-16 p-2 text-[1.625rem] rounded-[.75rem]";

  const focusClasses = "focus:outline-0 focus:border-[#5CF8FD]";

  const inputClasses = clsx(
    baseClasses,
    focusClasses,
    isError && "custom-input-error",
    className
  );

  const labelClasses = clsx(
    "group-focus-within:text-[#5CF8FD]",
    isError && "text-[#e11f0e]"
  );

  return (
    <div className="group flex flex-col gap-2">
      <label htmlFor={id} className={clsx(labelClasses, "text-[1.625rem]")}>
        {label}
      </label>

      <input id={id} className={inputClasses} {...rest} />

      <span className={clsx("h-6 text-[1.25rem]", isError && "text-[#e11f0e]")}>
        {helperText}
      </span>
    </div>
  );
};

export default CustomInput;
