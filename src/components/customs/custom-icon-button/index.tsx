import clsx from "clsx";
import { CustomIconButtonProps } from "./type";

const CusomIconButton: React.FC<CustomIconButtonProps> = ({
  icon,
  className,
  ...rest
}) => {
  const iconButtonClasses = clsx("cursor-pointer", className);

  return (
    <button className={iconButtonClasses} {...rest}>
      {icon}
    </button>
  );
};

export default CusomIconButton;
