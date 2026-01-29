import { cn } from "@/utils";
import { WhotCardType } from "@/utils/types";

const Description = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex-1 flex flex-col gap-3 p-5 font-satoshi justify-center">
      <p className="font-bold text-2xl leading-[28.8px] tracking-[1%] text-grey-950">
        {title}
      </p>
      <p className="font-normal text-base leading-[25.6px] tracking-[0.15%] text-grey-700">
        {subtitle}
      </p>
    </div>
  );
};

export default function WhotCard({ content }: { content: WhotCardType }) {
  console.log(content.isDown);
  return (
    <div
      className={cn(
        "border border-grey-400 row-span-2 rounded-4xl bg-white overflow-hidden flex flex-1 flex-col",
        content.isDown ? "row-start-2" : "row-start-1",
      )}
    >
      {!content.isDown && (
        <Description title={content.title} subtitle={content.subtitle} />
      )}
      <img
        src={content.src}
        alt={content.name}
        className="h-114.25 bg-cover w-full"
      />
      {content.isDown && (
        <Description title={content.title} subtitle={content.subtitle} />
      )}
    </div>
  );
}
