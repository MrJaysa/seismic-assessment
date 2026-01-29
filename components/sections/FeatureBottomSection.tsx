import { featureBottomCards } from "@/utils/iterables";

export default function FeatureButtomSection() {
  return (
    <section
      id="feature"
      className="py-12 grid grid-cols-[repeat(4,298px)] items-center justify-center gap-6"
    >
      {featureBottomCards.map((item) => (
        <div
          key={item.name}
          className="bg-grey-200 rounded-3xl flex flex-col gap-6 p-6 items-center"
        >
          <img src={item.src} alt={item.name} className="size-13" />

          <div className="flex flex-col gap-3 items-center ">
            <p className="text-center font-bold text-xl leading-7 tracking-[1%] text-grey-950">
              {item.title}
            </p>
            <p className="text-center font-normal text-base leading-[25.6px] tracking-[0.15%] text-grey-700">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
