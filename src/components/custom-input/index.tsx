import clsx from "clsx";
import { CustomInputProps } from "./type";

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { label, id, className, ...rest } = props;

  const baseClasses =
    "border border-white w-full h-16 p-2 text-[1.625rem] rounded-[.75rem] focus:outline-0";

  const inputClasses = clsx(baseClasses, className);

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
