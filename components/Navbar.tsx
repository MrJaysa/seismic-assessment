import Button from "@/components/common/Button";
import { NavLinks } from "@/utils/iterables";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 sticky top-0 bg-background border-b border-b-white select-none z-50">
      <a href="#hero" className="flex items-center gap-2">
        <div className="size-8 rounded-full bg-primary" />
        <h1 className="font-satoshi font-bold text-md text-grey-950">
          Brand Name
        </h1>
      </a>

      <div className="flex items-center">
        {NavLinks.map((nav) => (
          <a
            href={nav.link}
            key={nav.title}
            className="p-3 font-satoshi font-normal text-grey-950"
          >
            {nav.title}
          </a>
        ))}
      </div>

      <Button text="Get Started" />
    </nav>
  );
}
