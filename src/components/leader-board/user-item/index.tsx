import { Avatar1SVG } from "@/svgs";
import { UserItemProps } from "./type";

const UserItem: React.FC<UserItemProps> = ({ count, rank, username }) => {
  return (
    <div className="py-3 pr-6 pl-4 flex items-center justify-between rounded-2xl [&:nth-child(3n+1)]:bg-[rgba(241,215,232,0.8)] [&:nth-child(3n+2)]:bg-[rgba(229,178,136,0.8)] [&:nth-child(3n)]:bg-[rgba(170,180,182,0.8)]">
      <div className="flex gap-2 items-center">
        <Avatar1SVG size="56" />

        <div className="flex flex-col gap-1 text-[#1C274C] text-[1.25rem]">
          <span>{username}</span>
          <span>{count}</span>
        </div>
      </div>

      <span className="h-8 w-8 rounded-full bg-white text-[#1C274C] text-[1.25rem] leading-8 text-center">
        {rank}
      </span>
    </div>
  );
};

export default UserItem;
