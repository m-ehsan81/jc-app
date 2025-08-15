"use client";

import { ArrowCircleRightSVG } from "@/svgs";
import { AccountItemProps } from "./type";

const AccountItem: React.FC<AccountItemProps> = (props) => {
  const { icon, onClick, title } = props;

  return (
    <div
      className="h-20 pl-2 flex items-center justify-between border-b border-[rgba(255,255,255,0.50)]"
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-[1.5rem]">{title}</span>
      </div>

      <ArrowCircleRightSVG />
    </div>
  );
};

export default AccountItem;
