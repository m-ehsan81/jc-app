import CustomInput from "@/components/custom-input";

const SignIn: React.FC = () => {
  return (
    <div className="px-6 py-10 flex justify-between flex-col">
      <div>
        <p className="text-[2rem] text-center">Sign In</p>

        <div className="flex flex-col gap-6 mt-[5.125rem]">
          <CustomInput label="User Name" />
          <CustomInput label="Password" />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default SignIn;
