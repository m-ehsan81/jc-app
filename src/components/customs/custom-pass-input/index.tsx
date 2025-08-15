"use client";

import { EyeSVG } from "@/svgs";
import CustomInput from "../custom-input";
import { CustomInputProps } from "../custom-input/type";
import { useState } from "react";

const CustomPassInput: React.FC<
  Omit<
    CustomInputProps,
    "startIcon" | "endIcon" | "onClickIcon" | "clickableIcon" | "type"
  >
> = (props) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <CustomInput
      type={showPass ? "text" : "password"}
      endIcon={<EyeSVG />}
      clickableIcon
      onIconClicked={() => setShowPass((prev) => !prev)}
      {...props}
    />
  );
};

export default CustomPassInput;
