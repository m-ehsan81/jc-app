import { Avatar1SVG, LeaderBoardSVG, MedalSVG } from "@/svgs";

const RankOne: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-16 mb-8">
      <div className="flex items-center">
        <span className="text-[1.875rem]">Leader Board</span>
        <LeaderBoardSVG />
      </div>

      <div className="relative mt-6">
        <Avatar1SVG size="96" />
        <span className="absolute -bottom-[1.875rem] right-[1.25rem]">
          <MedalSVG />
        </span>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <span className="text-[1.25rem]">Ehsan Hakim</span>
        <span className="text-[1.25rem]">95</span>
      </div>
    </div>
  );
};

export default RankOne;
