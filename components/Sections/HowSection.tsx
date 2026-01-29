import Button from "@/components/common/Button";
import StepContainer from "@/components/common/StepContainer";

export default function HowSection() {
  return (
    <section
      id="hiw"
      className="py-12 flex flex-col gap-8 items-center w-390.5 h-378.25 bg-[url('/images/bg-image.png')] bg-cover bg-center"
    >
      <div className="flex flex-col items-center gap-6">
        <Button text="Simple Steps" variant="cyan" />

        <div className="flex flex-col gap-3 items-center font-satoshi">
          <p className="font-medium text-5xl text-grey-950 leading-[57.6px] tacking-[0.25%]">
            How it Works
          </p>

          <p className="text-center text-grey-700 font-normal leading-[25.6px] tacking-[0.15%]">
            {"Buying from international stores doesn’t have to be complicated."}{" "}
            <br />
            {"Here’s how we make it simple."}
          </p>
        </div>
      </div>

      <div className="w-241.75 flex flex-col gap-33.75">
        <div className="grid grid-cols-[348px_1fr_348px]">
          <StepContainer
            stepVal={1}
            title="Shop Online"
            info="Buy items from international stores that ship to our overseas warehouse."
          />

          <div className="w-full  grid grid-cols-[.5fr_1fr_.5fr] self-center h-43 mt-20 ">
            <div className="border-t-2 border-t-primary relative after:content-[] after:size-3 after:absolute after:-top-1.5 after:rounded-full after:left-0 after:bg-primary" />
            <svg className="inset-0 w-full h-full" preserveAspectRatio="none">
              <line
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
                className="stroke-primary stroke-2"
              />
            </svg>
            <div className="border-b-2 border-t-primary relative after:content-[] after:size-3 after:absolute after:-bottom-1.5 after:rounded-full after:right-0 after:bg-primary"></div>
          </div>

          <StepContainer
            stepVal={2}
            title="We Receive Your Item"
            info="Your order arrives at our shared overseas warehouse, where it is checked in and prepared for shipping."
            className="mt-45 relative after:content-[] after:absolute after:left-1/2 after:top-full after:w-6 after:h-33.75 after:bg-[radial-gradient(circle_at_center_6px,var(--color-primary)_6px,transparent_0),radial-gradient(circle_at_center_calc(100%-6px),var(--color-primary)_6px,transparent_0),linear-gradient(to_right,transparent_calc(50%-2px),var(--color-primary)_50%,transparent_calc(50%+1px))]
"
          />
        </div>

        <div className="grid grid-cols-[348px_1fr_348px]">
          <StepContainer
            stepVal={3}
            title="Choose Shipping & Pay"
            info="Select your shipping option, view the cost, and complete payment."
            className="col-start-3"
          />

          <div className="w-full  grid grid-cols-[.5fr_1fr_.5fr] self-center h-45 -mt-28 col-start-2">
            <div className="border-b-2 border-t-primary relative after:content-[] after:size-3 after:absolute after:-bottom-1.5 after:rounded-full after:left-0 after:bg-primary"></div>
            <svg className="inset-0 w-full h-full" preserveAspectRatio="none">
              <line
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
                className="stroke-primary stroke-2"
              />
            </svg>
            <div className="border-t-2 border-t-primary relative after:content-[] after:size-3 after:absolute after:-top-1.5 after:rounded-full after:right-0 after:bg-primary"></div>
          </div>

          <StepContainer
            stepVal={4}
            title="Delivered to Nigeria"
            info="Your package is shipped to Nigeria and delivered to your address, with tracking updates along the way."
            className="col-start-1 -mt-54"
          />
        </div>
      </div>
    </section>
  );
}
