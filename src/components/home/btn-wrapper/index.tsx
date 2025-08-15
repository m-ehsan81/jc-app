"use client";
import { CustomButton } from "@/components/customs";
import { CupSVG, UserSVG } from "@/svgs";

const HomeBtnWrapper: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <CustomButton
        onClick={() => console.log("first")}
        startIcon={<UserSVG />}
      >
        Profile
      </CustomButton>
      <CustomButton onClick={() => console.log("first")} startIcon={<CupSVG />}>
        Leader Board
      </CustomButton>
    </div>
  );
};

export default HomeBtnWrapper;
