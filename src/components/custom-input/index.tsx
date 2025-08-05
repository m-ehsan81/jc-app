import clsx from "clsx";
import { CustomInputProps } from "./type";

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { label, id, isError, className, ...rest } = props;

  const baseClasses =
    "border border-white w-full h-16 p-2 text-[1.625rem] rounded-[.75rem]";

  const focusClasses = "focus:outline-0 focus:border-[#5CF8FD]";

  const errorClasses = "border-[#E11F0E]";

  const inputClasses = clsx(
    baseClasses,
    errorClasses,
    focusClasses,
    className
  );

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[1.625rem]">
        {label}
      </label>

      <input id={id} className={inputClasses} {...rest} />
    </div>
  );
};

export default CustomInput;
