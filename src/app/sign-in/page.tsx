import AuthWrapper from "@/components/auth-warpper";
import { CustomInput, CustomPassInput } from "@/components/customs";

import Link from "next/link";

const SignIn: React.FC = () => {
  return (
    <AuthWrapper title="Sign In" type="sign-in">
      <CustomInput label="User Name" />

      <div>
        <CustomPassInput label="Password" />
        <Link
          href="/forget-password"
          className="!text-[#5CF8FD] text-[1.125rem]"
        >
          Forgot your pass?
        </Link>
      </div>
    </AuthWrapper>
  );
};

export default SignIn;
