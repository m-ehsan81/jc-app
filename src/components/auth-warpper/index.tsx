"use client";

import { FC, PropsWithChildren } from "react";
import { AuthWrapperProps, typeItems } from "./type";
import { CustomButton, CustomButtonProps } from "../customs";
import { useRouter } from "next/navigation";

const AuthWrapper: FC<PropsWithChildren<AuthWrapperProps>> = (props) => {
  const { title, type, children } = props;

  const router = useRouter();

  const buttonParams = (buttonType: typeItems) => {
    let res: Pick<CustomButtonProps, "type" | "onClick">;

    if (buttonType === type) {
      res = { type: "submit" };
    } else {
      res = {
        type: "button",
        onClick: () =>
          router.push(type === "sign-in" ? "/sign-up" : "/sign-in"),
      };
    }

    return res;
  };

  return (
    <div className="px-6 py-10 flex justify-between flex-col h-screen">
      <div>
        <p className="text-[2rem] text-center">{title}</p>

        <div className="flex flex-col gap-2 mt-[5.125rem]">{children}</div>
      </div>

      <div className="flex flex-col gap-4">
        <CustomButton {...buttonParams("sign-in")}>Sign In</CustomButton>
        <CustomButton {...buttonParams("sign-up")}>Sign Up</CustomButton>
      </div>
    </div>
  );
};

export default AuthWrapper;
