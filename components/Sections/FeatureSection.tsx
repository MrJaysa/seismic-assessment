import Button from "@/components/common/Button";
import { storeCards } from "@/utils/iterables";

export default function FeatureSection() {
  return (
    <section className="py-12 flex flex-col gap-6 items-center">
      <div className="flex flex-col items-center gap-6">
        <Button text="Popular Stores" variant="cyan" />

        <div className="flex flex-col gap-3 items-center font-satoshi">
          <p className="font-medium text-5xl text-grey-950 leading-[57.6px] tacking-[0.25%]">
            Top Stores Nigerians Shop From
          </p>

          <p className="text-center text-grey-700 font-normal leading-[25.6px] tacking-[0.15%]">
            Shop from trusted international brands across fashion, electronics,
            home, and more. We <br /> handle the delivery from abroad and bring
            your items safely to Nigeria.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(4,298px)] gap-6">
        {storeCards.map((card) => (
          <div
            key={card.name}
            className="w-full h-35 bg-grey-200 rounded-4xl flex items-center justify-center"
          >
            <img src={card.src} alt={card.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
