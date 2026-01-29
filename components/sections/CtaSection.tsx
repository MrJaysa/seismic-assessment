import Button from "@/components/common/Button";
import { cn } from "@/utils";
import { ctaCard } from "@/utils/iterables";

export default function CtaSection() {
  return (
    <section className="py-12 grid grid-cols-[repeat(2,620px)] gap-6 items-center">
      <div className="flex flex-col justify-start gap-8">
        <div className="flex flex-col gap-4">
          <p className="font-black text-[52px] leading-[62.4px] tracking-[0.25%] text-grey-950">
            Start Shipping From Abroad Without Stress
          </p>
          <p className="font-normal text-lg leading-[28.8px] tracking-[1%] text-grey-700 w-110.5">
            Shop internationally with confidence and receive your items in
            Nigeria with ease.
          </p>
        </div>

        <div className="self-start">
          <Button text="Create an account" variant="primary_lg" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 h-130">
        {ctaCard.map((item) => (
          <img
            key={item.key}
            src={item.src}
            className={cn(
              "rounded-4xl overflow-hidden",
              item.isFull && "col-span-2",
            )}
          />
        ))}
      </div>
    </section>
  );
}
