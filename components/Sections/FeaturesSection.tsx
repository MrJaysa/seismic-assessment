import Button from "@/components/common/Button";
import { featureCards } from "@/utils/iterables";

export default function FeaturesSection() {
  return (
    <section id="feature" className="py-12 flex flex-col gap-8 items-center">
      <div className="flex flex-col items-center gap-6">
        <Button text="Platform Highlights" variant="cyan" />

        <div className="flex flex-col gap-3 items-center font-satoshi">
          <p className="font-medium text-5xl text-grey-950 leading-[57.6px] tacking-[0.25%]">
            Everything You Need, In One Place
          </p>

          <p className="text-center text-grey-700 font-normal leading-[25.6px] tacking-[0.15%]">
            All your global shopping and shipping tools, together.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(3,405.3px)] gap-6">
        {featureCards.map((card) => (
          <div
            key={card.name}
            className="w-full h-115 bg-white border border-grey-400 rounded-4xl flex flex-col overflow-hidden"
          >
            <img
              src={card.src}
              alt={card.name}
              className="bg-cover aspect-auto h-81"
            />
            <div className="flex-1 flex flex-col gap-3 p-5 font-satoshi">
              <p className="font-bold text-2xl leading-[28.8px] tracking-[1%] text-grey-950">
                {card.title}
              </p>
              <p className="font-normal text-base leading-[25.6px] tracking-[0.15%] text-grey-700">
                {card.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
