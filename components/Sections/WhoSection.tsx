import Button from "@/components/common/Button";
import WhotCard from "@/components/common/WhotCard";
import { whotCards } from "@/utils/iterables";

export default function WhoSection() {
  return (
    <section className="py-12 flex flex-col gap-8 items-center">
      <div className="flex flex-col items-center gap-6">
        <Button text="Built for You" variant="cyan" />

        <div className="flex flex-col gap-3 items-center font-satoshi">
          <p className="font-medium text-5xl text-grey-950 leading-[57.6px] tacking-[0.25%]">
            Who Is This For?
          </p>

          <p className="text-center text-grey-700 font-normal leading-[25.6px] tacking-[0.15%]">
            Designed for Nigerians who shop internationally and want reliable{" "}
            <br /> delivery back home.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 w-316 grid-rows-[1fr_457px_1fr]">
        {whotCards.map((item) => (
          <WhotCard key={item.name} content={item} />
        ))}
      </div>
    </section>
  );
}
