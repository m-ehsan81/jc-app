import { Avatar1SVG, MenuSVG } from "@/svgs";

const HomeHeader: React.FC = () => {
  return (
    <div className="flex justify-between items-center flex-row-reverse w-full">
      <MenuSVG />

      <div className="flex items-center gap-4">
        <Avatar1SVG />

        <span>Welcome Ehsan!</span>
      </div>
    </div>
  );
};

export default HomeHeader;
