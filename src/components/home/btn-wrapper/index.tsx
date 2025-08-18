"use client";

import { useRouter } from "next/navigation";
import { CustomButton } from "@/components/customs";
import { CupSVG, UserSVG } from "@/svgs";

const HomeBtnWrapper: React.FC = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col gap-4">
      <CustomButton
        onClick={() => router.push("/profile/test")}
        startIcon={<UserSVG />}
      >
        Profile
      </CustomButton>

      <CustomButton
        onClick={() => router.push("/leader-board")}
        startIcon={<CupSVG />}
      >
        Leader Board
      </CustomButton>
    </div>
  );
};

export default HomeBtnWrapper;
