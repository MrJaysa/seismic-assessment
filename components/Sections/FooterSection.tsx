import Brand from "@/components/common/Brand";
import Button from "@/components/common/Button";
import { footerLinks } from "@/utils/iterables";

export default function FooterSection() {
  return (
    <section className="flex flex-col gap-12 items-center bg-primary pt-18 w-full">
      <div className="flex flex-col items-center gap-4">
        <Brand type="footer" />
        <p className="font-normal text-lg leading-[28.8px] tracking-[1%] text-center text-primary-400">
          Shop internationally, receive your items in Nigeria. Simply, <br />
          safely, and transparently.
        </p>
      </div>

      <div className="gap-4 flex">
        {footerLinks.map((item) => (
          <a
            key={item.key}
            href={item.link}
            className="cursor-pointer outline-none"
          >
            <Button text={item.text} variant="footer" />
          </a>
        ))}
      </div>

      <p className="border-t border-t-primary-400 text-white w-full text-center py-6 font-normal text-lg leading-[28.8px] tracking-[1%]">
        © 2025 YourPlatformName. All rights reserved.
      </p>
    </section>
  );
}
