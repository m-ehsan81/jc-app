import { Avatar1SVG, UserEditSVG } from "@/svgs";

const AccountInformation: React.FC = () => {
  return (
    <div className="mt-[5.5rem] flex items-center gap-3">
      <Avatar1SVG size="96" />

      <div className="flex flex-col gap-4 min-w-0 flex-1">
        <div className="flex items-center justify-between min-w-0">
          <span className="text-[1.875rem] truncate min-w-0">Ehsan hakim</span>

          <span className="flex-shrink-0">
            <UserEditSVG />
          </span>
        </div>

        <span className="text-[.875rem] truncate">m.ehsan1381@gmail.com</span>
      </div>
    </div>
  );
};

export default AccountInformation;
