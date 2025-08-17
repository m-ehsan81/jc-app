import AuthWrapper from "@/components/auth-warpper";
import { CustomInput, CustomPassInput } from "@/components/customs";

const SignUpPage: React.FC = () => {
  return (
    <AuthWrapper title="Sign Up" type="sign-up">
      <CustomInput label="User Name" />

      <CustomPassInput label="Password" />

      <CustomPassInput label="Re-PassWorld" />
    </AuthWrapper>
  );
};

export default SignUpPage;
