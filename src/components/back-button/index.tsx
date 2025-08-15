import { ArrowLeftSVG } from "@/svgs";

const BackButton: React.FC<{ title?: string }> = ({ title }) => {
  return (
    <div className="w-full flex items-center">
      <ArrowLeftSVG />

      {title && (
        <span className="text-[1.875rem] grow text-center">{title}</span>
      )}
    </div>
  );
};

export default BackButton;
