"use client";
import CustomButton from "@/components/custom-button";
import CustomInput from "@/components/custom-input";
import CupSVG from "@/svgs/cup";

const SignIn: React.FC = () => {
  return (
    <div className="px-6 py-10 flex justify-between flex-col h-screen">
      <div>
        <p className="text-[2rem] text-center">Sign In</p>

        <div className="flex flex-col gap-2 mt-[5.125rem]">
          <CustomInput
            label="User Name"
            isError={true}
            helperText="rewre"
            id="1"
          />
          <CustomInput label="Password" id="2" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <CustomButton onClick={() => console.log("first")} endIcon={<CupSVG />}>
          Sign In
        </CustomButton>
        <CustomButton onClick={() => console.log("first")} startIcon={<CupSVG />}>
          Sign Up
        </CustomButton>
      </div>
    </div>
  );
};

export default SignIn;
