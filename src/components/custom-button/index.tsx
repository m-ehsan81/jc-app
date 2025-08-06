import { CustomButtonProps } from "./type";

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { endIcon, startIcon, children, className, ...rest } = props;

  return (
    <button
      className="bg-white text-[#1C274C] text-[1.875rem] h-[4rem] rounded-[.75rem] cursor-pointer"
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;
