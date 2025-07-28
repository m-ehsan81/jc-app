import { CustomButtonProps } from "./type";

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { endIcon, startIcon, children, className, ...rest } = props;

  return <button {...rest}>{children}</button>;
};

export default CustomButton;
