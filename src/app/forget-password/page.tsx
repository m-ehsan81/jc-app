import BackButton from "@/components/back-button";
import { CustomButton, CustomInput } from "@/components/customs";

const ForgetPassword = () => {
  return (
    <div className="p-6">
      <BackButton title="Forget Password" />

      <p className="mt-[4.875rem] mb-10 text-[1.25rem]">
        Enter the email and we'll send an email with instructions to reset your
        password.
      </p>

      <CustomInput label="Email Address" />

      <CustomButton className="mt-4">Send Code</CustomButton>
    </div>
  );
};

export default ForgetPassword;
