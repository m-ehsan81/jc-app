"use client";

import {
  CustomButton,
  CustomInput,
  CustomPassInput,
} from "@/components/customs";
import { EyeSVG } from "@/svgs";
import CupSVG from "@/svgs/cup";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignIn: React.FC = () => {
  const router = useRouter();

  return (
    <div className="px-6 py-10 flex justify-between flex-col h-screen">
      <div>
        <p className="text-[2rem] text-center">Sign In</p>

        <div className="flex flex-col gap-2 mt-[5.125rem]">
          <CustomInput label="User Name" id="1" />

          <div>
            <CustomPassInput label="Password" id="2" />
            <Link
              href="/forget-password"
              className="!text-[#5CF8FD] text-[1.125rem]"
            >
              Forgot your pass?
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <CustomButton onClick={() => console.log("first")} endIcon={<CupSVG />}>
          Sign In
        </CustomButton>
        <CustomButton
          onClick={() => router.push("/sign-up")}
          startIcon={<CupSVG />}
        >
          Sign Up
        </CustomButton>
      </div>
    </div>
  );
};

export default SignIn;
