"use client";

import { ArrowLeftSVG } from "@/svgs";
import { CustomIconButton } from "../customs";
import { useRouter } from "next/navigation";

const BackButton: React.FC<{ title?: string }> = ({ title }) => {
  const router = useRouter();
  return (
    <div className="w-full flex items-center">
      <CustomIconButton icon={<ArrowLeftSVG />} onClick={() => router.back()} />

      {title && (
        <span className="text-[1.875rem] grow text-center">{title}</span>
      )}
    </div>
  );
};

export default BackButton;
