import Button from "@/components/common/Button";

export default function HeroSection() {
  return (
    <section id="hero" className="py-12 flex flex-col gap-6 items-center">
      <Button text="Global Shopping, Made Simple" variant="cyan" />

      <p className=" font-black text-[52px] leading-[62.4px] text-center tracking-[0.25%] text-grey-950">
        Buy from International Stores. <br /> We Deliver to Nigeria.
      </p>

      <div className="h-[296.9px] w-[1146.9px]">
        <img src="/images/items.png" alt="items" className="w-full" />
      </div>

      <p className="text-center  font-normal text-base tracking-[0.15%] leading-[25.6px] text-grey-700">
        We help{" "}
        <span className="text-grey-950"> Nigerians shop from abroad</span>,
        receive items at our overseas warehouse, and <br />
        <span className="text-grey-950">ship them safely to Nigeria</span>, with
        clear pricing and full tracking.
      </p>

      <div className="flex gap-4">
        <Button text="Get Started" />
        <Button text="How it Works" variant="white" />
      </div>
    </section>
  );
}
