import { cn } from "@/utils";

const steps: Record<number, { title: string; step: string }> = {
  1: {
    title: "STEP ONE",
    step: "01",
  },
  2: {
    title: "STEP TWO",
    step: "02",
  },
  3: {
    title: "STEP THREE",
    step: "03",
  },
  4: {
    title: "STEP FOUR",
    step: "04",
  },
};

export default function StepContainer({
  stepVal,
  title,
  info,
  className,
}: {
  stepVal: number;
  title: string;
  info: string;
  className?: string;
}) {
  const step = steps[stepVal];

  return (
    <div className={cn("flex flex-col gap-4 w-full h-83.5", className)}>
      <div className="bg-white rounded-full py-3 pr-3 pl-6 w-full flex justify-between items-center  font-normal text-grey-950">
        <p className="text-2xl tracking-[1%] leading-[28.8px]">{step.title}</p>
        <div className="relative size-11.25 rounded-full flex items-center justify-center">
          <div className="size-11.25 rounded-full border-3 border-primary border-dashed flex items-center justify-center absolute" />
          <p className="size-10.75 rounded-full flex items-center justify-center absolute bg-white">
            {step.step}
          </p>
        </div>
      </div>

      <div className="bg-white h-62.25 p-6 rounded-4xl flex flex-col justify-end w-full  gap-4.25">
        <p className="font-bold text-2xl leading-[28.8px] tracking-[1%] text-grey-950">
          {title}
        </p>
        <p className="font-base leading-[25.6px] tracking-[0.15%] text-grey-700">
          {info}
        </p>
      </div>
    </div>
  );
}
