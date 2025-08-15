import clsx from "clsx";
import { CustomInputProps } from "./type";

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const {
    label,
    id,
    isError,
    helperText,
    startIcon,
    endIcon,
    onIconClicked,
    clickableIcon,
    className,
    ...rest
  } = props;

  const baseClasses =
    "border border-white w-full h-16 p-2 text-[1.625rem] rounded-[.75rem]";

  const focusClasses = "focus:outline-0 focus:border-[#5CF8FD]";

  const inputClasses = clsx(
    baseClasses,
    focusClasses,
    isError && "custom-input-error",
    !!startIcon && "pl-14",
    !!endIcon && "pr-14",
    className
  );

  const labelClasses = clsx(
    "group-focus-within:text-[#5CF8FD]",
    isError && "text-[#e11f0e]"
  );

  const iconBaseClasses = clsx(
    "absolute flex items-center cursor-pointer",
    !clickableIcon && "pointer-events-none"
  );

  const startIconClasses = clsx(iconBaseClasses, "left-4");
  const endIconClasses = clsx(iconBaseClasses, "right-4");

  return (
    <div className="group flex flex-col gap-2">
      <label htmlFor={id} className={clsx(labelClasses, "text-[1.625rem]")}>
        {label}
      </label>

      <div className="relative flex items-center">
        {startIcon && (
          <span onClick={onIconClicked} className={startIconClasses}>
            {startIcon}
          </span>
        )}

        <input id={id} className={inputClasses} {...rest} />

        {endIcon && (
          <span onClick={onIconClicked} className={endIconClasses}>
            {endIcon}
          </span>
        )}
      </div>

      <span className={clsx("h-6 text-[1.25rem]", isError && "text-[#e11f0e]")}>
        {helperText}
      </span>
    </div>
  );
};

export default CustomInput;
