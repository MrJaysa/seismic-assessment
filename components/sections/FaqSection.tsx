import Button from "@/components/common/Button";
import { faqList } from "@/utils/iterables";

export default function FaqSection() {
  return (
    <section id="faqs" className="py-12 flex flex-col gap-8 items-center">
      <div className="flex flex-col items-center gap-6">
        <Button text="Built for you" variant="cyan" />

        <div className="flex flex-col gap-3 items-center">
          <p className="font-medium text-5xl text-grey-950 leading-[57.6px] tacking-[0.25%]">
            FAQs
          </p>

          <p className="text-center text-grey-700 font-normal leading-[25.6px] tacking-[0.15%]">
            Focused on your needs, our team delivers solutions to ensure <br />
            adequate and secure buy and ship to Nigeria.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-199.5">
        {faqList.map((item) => (
          <div
            key={item.key}
            className="bg-grey-200 rounded-4xl p-8 grid grid-cols-2 gap-8 items-center "
          >
            <p className="text-grey-950 font-bold leading-6 tracking-[-2%] text-base">
              {item.question}
            </p>
            <p className="text-grey-700 font-normal leading-[25.6px] tracking-[-0.15%] text-base">
              {item.answer}
            </p>
          </div>
        ))}

        <div className="flex flex-col items-center rounded-4xl p-8 gap-4">
          <div className="flex flex-col gap-2 items-center">
            <p className="font-bold text-xl leading-7 tracking-[1%] text-grey-950">
              Still have a question?
            </p>
            <p className="font-normal text-base leading-[25.6px] tracking-[0.15%] text-grey-700">
              Reach out to our support team.
            </p>
          </div>

          <Button text="Contact Us" variant="white" />
        </div>
      </div>
    </section>
  );
}
